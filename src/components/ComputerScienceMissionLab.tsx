import React from 'react';
import type { Language } from '../types';
import { ComputerScienceLab } from './ComputerScienceLab';
import { ComputerScienceRemainingLabs, COMPUTER_SCIENCE_REMAINING_MISSION_IDS } from './ComputerScienceRemainingLabs';

type Props = { missionId: string; lang: Language };
const remainingMissionIds = new Set(COMPUTER_SCIENCE_REMAINING_MISSION_IDS);

export const ComputerScienceMissionLab: React.FC<Props> = ({ missionId, lang }) =>
  remainingMissionIds.has(missionId)
    ? <ComputerScienceRemainingLabs key={missionId} missionId={missionId} lang={lang} />
    : <ComputerScienceLab missionId={missionId} lang={lang} />;
