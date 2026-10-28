"""Runs every predict-the-output snippet with real Python and compares with the expected answer."""
import contextlib, io, json, os, sys, tempfile
rounds = json.load(open(sys.argv[1]))
os.chdir(tempfile.mkdtemp())  # snippets that write files do it here
bad = 0
for q in rounds:
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        exec(q["code"], {})
    if buf.getvalue().strip() != q["out"].strip():
        bad += 1
        print("MISMATCH", q["id"], q["lang"], repr(buf.getvalue()), repr(q["out"]))
print(f"{len(rounds)} snippets checked, {bad} mismatches")
sys.exit(1 if bad else 0)
