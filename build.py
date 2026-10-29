#!/usr/bin/env python3
"""Concatenate the source parts in src/ into a single self-contained index.html."""
from pathlib import Path

ORDER = [
    "0_open.html",      # doctype + <head> start
    "1_head.html",      # <title>, fonts, all CSS
    "1b_body.html",     # config.js loader, </head><body>
    "2_visuals.js",     # page shell, helpers, icons, characters, visuals (ch. 1-5)
    "2b_visuals2.js",   # code highlighter + visuals (ch. 6-16)
    "3a_arcs12.js",     # arcs + missions, ch. 1-2
    "3b_arc3.js",       # missions, ch. 3
    "3c_arcs45.js",     # missions ch. 4-5, build data, ranks, codex
    "3d_ch6_10.js",     # units + missions ch. 6-10
    "3e_ch11_16.js",    # missions ch. 11-16 + codex additions
    "4_engine.js",      # state, map, scenes, mini-games, battles, dojo, codex
    "4b_games2.js",     # mini-games for ch. 6-16
    "4c_race.js",       # multiplayer race mode (Supabase Realtime)
    "5_end.js",         # start-up + </script>
    "6_close.html",     # </body></html>
]

root = Path(__file__).parent
out = "".join((root / "src" / name).read_text(encoding="utf-8") for name in ORDER)
(root / "index.html").write_text(out, encoding="utf-8")
print(f"index.html written ({len(out):,} bytes)")
