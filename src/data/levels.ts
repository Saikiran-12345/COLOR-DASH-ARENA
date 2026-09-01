export interface LevelConfig {
  levelNumber: number;
  name: string;
  targetScore: number;
  timeLimit: number;
  gridSize: number;
  colorSimilarity: number;
  modifiers: string[];
}
export const CAMPAIGN_LEVELS: LevelConfig[] = [
  {
    levelNumber: 1,
    name: 'Stage 1',
    targetScore: 100,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.100,
    modifiers: []
  },
  {
    levelNumber: 2,
    name: 'Stage 2',
    targetScore: 200,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.101,
    modifiers: []
  },
  {
    levelNumber: 3,
    name: 'Stage 3',
    targetScore: 300,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.101,
    modifiers: []
  },
  {
    levelNumber: 4,
    name: 'Stage 4',
    targetScore: 400,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.102,
    modifiers: []
  },
  {
    levelNumber: 5,
    name: 'Stage 5',
    targetScore: 500,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.102,
    modifiers: []
  },
  {
    levelNumber: 6,
    name: 'Stage 6',
    targetScore: 600,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.102,
    modifiers: []
  },
  {
    levelNumber: 7,
    name: 'Stage 7',
    targetScore: 700,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.103,
    modifiers: []
  },
  {
    levelNumber: 8,
    name: 'Stage 8',
    targetScore: 800,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.103,
    modifiers: []
  },
  {
    levelNumber: 9,
    name: 'Stage 9',
    targetScore: 900,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.104,
    modifiers: []
  },
  {
    levelNumber: 10,
    name: 'Stage 10',
    targetScore: 1000,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.104,
    modifiers: []
  },
  {
    levelNumber: 11,
    name: 'Stage 11',
    targetScore: 1100,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.104,
    modifiers: []
  },
  {
    levelNumber: 12,
    name: 'Stage 12',
    targetScore: 1200,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.105,
    modifiers: []
  },
  {
    levelNumber: 13,
    name: 'Stage 13',
    targetScore: 1300,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.105,
    modifiers: []
  },
  {
    levelNumber: 14,
    name: 'Stage 14',
    targetScore: 1400,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.106,
    modifiers: []
  },
  {
    levelNumber: 15,
    name: 'Stage 15',
    targetScore: 1500,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.106,
    modifiers: []
  },
  {
    levelNumber: 16,
    name: 'Stage 16',
    targetScore: 1600,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.106,
    modifiers: []
  },
  {
    levelNumber: 17,
    name: 'Stage 17',
    targetScore: 1700,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.107,
    modifiers: []
  },
  {
    levelNumber: 18,
    name: 'Stage 18',
    targetScore: 1800,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.107,
    modifiers: []
  },
  {
    levelNumber: 19,
    name: 'Stage 19',
    targetScore: 1900,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.108,
    modifiers: []
  },
  {
    levelNumber: 20,
    name: 'Stage 20',
    targetScore: 2000,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.108,
    modifiers: []
  },
  {
    levelNumber: 21,
    name: 'Stage 21',
    targetScore: 2100,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.108,
    modifiers: []
  },
  {
    levelNumber: 22,
    name: 'Stage 22',
    targetScore: 2200,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.109,
    modifiers: []
  },
  {
    levelNumber: 23,
    name: 'Stage 23',
    targetScore: 2300,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.109,
    modifiers: []
  },
  {
    levelNumber: 24,
    name: 'Stage 24',
    targetScore: 2400,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.110,
    modifiers: []
  },
  {
    levelNumber: 25,
    name: 'Stage 25',
    targetScore: 2500,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.110,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 26,
    name: 'Stage 26',
    targetScore: 2600,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.110,
    modifiers: []
  },
  {
    levelNumber: 27,
    name: 'Stage 27',
    targetScore: 2700,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.111,
    modifiers: []
  },
  {
    levelNumber: 28,
    name: 'Stage 28',
    targetScore: 2800,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.111,
    modifiers: []
  },
  {
    levelNumber: 29,
    name: 'Stage 29',
    targetScore: 2900,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.112,
    modifiers: []
  },
  {
    levelNumber: 30,
    name: 'Stage 30',
    targetScore: 3000,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.112,
    modifiers: []
  },
  {
    levelNumber: 31,
    name: 'Stage 31',
    targetScore: 3100,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.112,
    modifiers: []
  },
  {
    levelNumber: 32,
    name: 'Stage 32',
    targetScore: 3200,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.113,
    modifiers: []
  },
  {
    levelNumber: 33,
    name: 'Stage 33',
    targetScore: 3300,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.113,
    modifiers: []
  },
  {
    levelNumber: 34,
    name: 'Stage 34',
    targetScore: 3400,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.114,
    modifiers: []
  },
  {
    levelNumber: 35,
    name: 'Stage 35',
    targetScore: 3500,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.114,
    modifiers: []
  },
  {
    levelNumber: 36,
    name: 'Stage 36',
    targetScore: 3600,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.114,
    modifiers: []
  },
  {
    levelNumber: 37,
    name: 'Stage 37',
    targetScore: 3700,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.115,
    modifiers: []
  },
  {
    levelNumber: 38,
    name: 'Stage 38',
    targetScore: 3800,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.115,
    modifiers: []
  },
  {
    levelNumber: 39,
    name: 'Stage 39',
    targetScore: 3900,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.116,
    modifiers: []
  },
  {
    levelNumber: 40,
    name: 'Stage 40',
    targetScore: 4000,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.116,
    modifiers: []
  },
  {
    levelNumber: 41,
    name: 'Stage 41',
    targetScore: 4100,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.116,
    modifiers: []
  },
  {
    levelNumber: 42,
    name: 'Stage 42',
    targetScore: 4200,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.117,
    modifiers: []
  },
  {
    levelNumber: 43,
    name: 'Stage 43',
    targetScore: 4300,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.117,
    modifiers: []
  },
  {
    levelNumber: 44,
    name: 'Stage 44',
    targetScore: 4400,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.118,
    modifiers: []
  },
  {
    levelNumber: 45,
    name: 'Stage 45',
    targetScore: 4500,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.118,
    modifiers: []
  },
  {
    levelNumber: 46,
    name: 'Stage 46',
    targetScore: 4600,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.118,
    modifiers: []
  },
  {
    levelNumber: 47,
    name: 'Stage 47',
    targetScore: 4700,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.119,
    modifiers: []
  },
  {
    levelNumber: 48,
    name: 'Stage 48',
    targetScore: 4800,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.119,
    modifiers: []
  },
  {
    levelNumber: 49,
    name: 'Stage 49',
    targetScore: 4900,
    timeLimit: 60,
    gridSize: 4,
    colorSimilarity: 0.120,
    modifiers: []
  },
  {
    levelNumber: 50,
    name: 'Stage 50',
    targetScore: 5000,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.120,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 51,
    name: 'Stage 51',
    targetScore: 5100,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.120,
    modifiers: []
  },
  {
    levelNumber: 52,
    name: 'Stage 52',
    targetScore: 5200,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.121,
    modifiers: []
  },
  {
    levelNumber: 53,
    name: 'Stage 53',
    targetScore: 5300,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.121,
    modifiers: []
  },
  {
    levelNumber: 54,
    name: 'Stage 54',
    targetScore: 5400,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.122,
    modifiers: []
  },
  {
    levelNumber: 55,
    name: 'Stage 55',
    targetScore: 5500,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.122,
    modifiers: []
  },
  {
    levelNumber: 56,
    name: 'Stage 56',
    targetScore: 5600,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.122,
    modifiers: []
  },
  {
    levelNumber: 57,
    name: 'Stage 57',
    targetScore: 5700,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.123,
    modifiers: []
  },
  {
    levelNumber: 58,
    name: 'Stage 58',
    targetScore: 5800,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.123,
    modifiers: []
  },
  {
    levelNumber: 59,
    name: 'Stage 59',
    targetScore: 5900,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.124,
    modifiers: []
  },
  {
    levelNumber: 60,
    name: 'Stage 60',
    targetScore: 6000,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.124,
    modifiers: []
  },
  {
    levelNumber: 61,
    name: 'Stage 61',
    targetScore: 6100,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.124,
    modifiers: []
  },
  {
    levelNumber: 62,
    name: 'Stage 62',
    targetScore: 6200,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.125,
    modifiers: []
  },
  {
    levelNumber: 63,
    name: 'Stage 63',
    targetScore: 6300,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.125,
    modifiers: []
  },
  {
    levelNumber: 64,
    name: 'Stage 64',
    targetScore: 6400,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.126,
    modifiers: []
  },
  {
    levelNumber: 65,
    name: 'Stage 65',
    targetScore: 6500,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.126,
    modifiers: []
  },
  {
    levelNumber: 66,
    name: 'Stage 66',
    targetScore: 6600,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.126,
    modifiers: []
  },
  {
    levelNumber: 67,
    name: 'Stage 67',
    targetScore: 6700,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.127,
    modifiers: []
  },
  {
    levelNumber: 68,
    name: 'Stage 68',
    targetScore: 6800,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.127,
    modifiers: []
  },
  {
    levelNumber: 69,
    name: 'Stage 69',
    targetScore: 6900,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.128,
    modifiers: []
  },
  {
    levelNumber: 70,
    name: 'Stage 70',
    targetScore: 7000,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.128,
    modifiers: []
  },
  {
    levelNumber: 71,
    name: 'Stage 71',
    targetScore: 7100,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.128,
    modifiers: []
  },
  {
    levelNumber: 72,
    name: 'Stage 72',
    targetScore: 7200,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.129,
    modifiers: []
  },
  {
    levelNumber: 73,
    name: 'Stage 73',
    targetScore: 7300,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.129,
    modifiers: []
  },
  {
    levelNumber: 74,
    name: 'Stage 74',
    targetScore: 7400,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.130,
    modifiers: []
  },
  {
    levelNumber: 75,
    name: 'Stage 75',
    targetScore: 7500,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.130,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 76,
    name: 'Stage 76',
    targetScore: 7600,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.130,
    modifiers: []
  },
  {
    levelNumber: 77,
    name: 'Stage 77',
    targetScore: 7700,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.131,
    modifiers: []
  },
  {
    levelNumber: 78,
    name: 'Stage 78',
    targetScore: 7800,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.131,
    modifiers: []
  },
  {
    levelNumber: 79,
    name: 'Stage 79',
    targetScore: 7900,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.132,
    modifiers: []
  },
  {
    levelNumber: 80,
    name: 'Stage 80',
    targetScore: 8000,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.132,
    modifiers: []
  },
  {
    levelNumber: 81,
    name: 'Stage 81',
    targetScore: 8100,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.132,
    modifiers: []
  },
  {
    levelNumber: 82,
    name: 'Stage 82',
    targetScore: 8200,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.133,
    modifiers: []
  },
  {
    levelNumber: 83,
    name: 'Stage 83',
    targetScore: 8300,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.133,
    modifiers: []
  },
  {
    levelNumber: 84,
    name: 'Stage 84',
    targetScore: 8400,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.134,
    modifiers: []
  },
  {
    levelNumber: 85,
    name: 'Stage 85',
    targetScore: 8500,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.134,
    modifiers: []
  },
  {
    levelNumber: 86,
    name: 'Stage 86',
    targetScore: 8600,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.134,
    modifiers: []
  },
  {
    levelNumber: 87,
    name: 'Stage 87',
    targetScore: 8700,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.135,
    modifiers: []
  },
  {
    levelNumber: 88,
    name: 'Stage 88',
    targetScore: 8800,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.135,
    modifiers: []
  },
  {
    levelNumber: 89,
    name: 'Stage 89',
    targetScore: 8900,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.136,
    modifiers: []
  },
  {
    levelNumber: 90,
    name: 'Stage 90',
    targetScore: 9000,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.136,
    modifiers: []
  },
  {
    levelNumber: 91,
    name: 'Stage 91',
    targetScore: 9100,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.136,
    modifiers: []
  },
  {
    levelNumber: 92,
    name: 'Stage 92',
    targetScore: 9200,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.137,
    modifiers: []
  },
  {
    levelNumber: 93,
    name: 'Stage 93',
    targetScore: 9300,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.137,
    modifiers: []
  },
  {
    levelNumber: 94,
    name: 'Stage 94',
    targetScore: 9400,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.138,
    modifiers: []
  },
  {
    levelNumber: 95,
    name: 'Stage 95',
    targetScore: 9500,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.138,
    modifiers: []
  },
  {
    levelNumber: 96,
    name: 'Stage 96',
    targetScore: 9600,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.138,
    modifiers: []
  },
  {
    levelNumber: 97,
    name: 'Stage 97',
    targetScore: 9700,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.139,
    modifiers: []
  },
  {
    levelNumber: 98,
    name: 'Stage 98',
    targetScore: 9800,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.139,
    modifiers: []
  },
  {
    levelNumber: 99,
    name: 'Stage 99',
    targetScore: 9900,
    timeLimit: 59,
    gridSize: 4,
    colorSimilarity: 0.140,
    modifiers: []
  },
  {
    levelNumber: 100,
    name: 'Stage 100',
    targetScore: 10000,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.140,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 101,
    name: 'Stage 101',
    targetScore: 10100,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.140,
    modifiers: []
  },
  {
    levelNumber: 102,
    name: 'Stage 102',
    targetScore: 10200,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.141,
    modifiers: []
  },
  {
    levelNumber: 103,
    name: 'Stage 103',
    targetScore: 10300,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.141,
    modifiers: []
  },
  {
    levelNumber: 104,
    name: 'Stage 104',
    targetScore: 10400,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.142,
    modifiers: []
  },
  {
    levelNumber: 105,
    name: 'Stage 105',
    targetScore: 10500,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.142,
    modifiers: []
  },
  {
    levelNumber: 106,
    name: 'Stage 106',
    targetScore: 10600,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.142,
    modifiers: []
  },
  {
    levelNumber: 107,
    name: 'Stage 107',
    targetScore: 10700,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.143,
    modifiers: []
  },
  {
    levelNumber: 108,
    name: 'Stage 108',
    targetScore: 10800,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.143,
    modifiers: []
  },
  {
    levelNumber: 109,
    name: 'Stage 109',
    targetScore: 10900,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.144,
    modifiers: []
  },
  {
    levelNumber: 110,
    name: 'Stage 110',
    targetScore: 11000,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.144,
    modifiers: []
  },
  {
    levelNumber: 111,
    name: 'Stage 111',
    targetScore: 11100,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.144,
    modifiers: []
  },
  {
    levelNumber: 112,
    name: 'Stage 112',
    targetScore: 11200,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.145,
    modifiers: []
  },
  {
    levelNumber: 113,
    name: 'Stage 113',
    targetScore: 11300,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.145,
    modifiers: []
  },
  {
    levelNumber: 114,
    name: 'Stage 114',
    targetScore: 11400,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.146,
    modifiers: []
  },
  {
    levelNumber: 115,
    name: 'Stage 115',
    targetScore: 11500,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.146,
    modifiers: []
  },
  {
    levelNumber: 116,
    name: 'Stage 116',
    targetScore: 11600,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.146,
    modifiers: []
  },
  {
    levelNumber: 117,
    name: 'Stage 117',
    targetScore: 11700,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.147,
    modifiers: []
  },
  {
    levelNumber: 118,
    name: 'Stage 118',
    targetScore: 11800,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.147,
    modifiers: []
  },
  {
    levelNumber: 119,
    name: 'Stage 119',
    targetScore: 11900,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.148,
    modifiers: []
  },
  {
    levelNumber: 120,
    name: 'Stage 120',
    targetScore: 12000,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.148,
    modifiers: []
  },
  {
    levelNumber: 121,
    name: 'Stage 121',
    targetScore: 12100,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.148,
    modifiers: []
  },
  {
    levelNumber: 122,
    name: 'Stage 122',
    targetScore: 12200,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.149,
    modifiers: []
  },
  {
    levelNumber: 123,
    name: 'Stage 123',
    targetScore: 12300,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.149,
    modifiers: []
  },
  {
    levelNumber: 124,
    name: 'Stage 124',
    targetScore: 12400,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.150,
    modifiers: []
  },
  {
    levelNumber: 125,
    name: 'Stage 125',
    targetScore: 12500,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.150,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 126,
    name: 'Stage 126',
    targetScore: 12600,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.150,
    modifiers: []
  },
  {
    levelNumber: 127,
    name: 'Stage 127',
    targetScore: 12700,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.151,
    modifiers: []
  },
  {
    levelNumber: 128,
    name: 'Stage 128',
    targetScore: 12800,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.151,
    modifiers: []
  },
  {
    levelNumber: 129,
    name: 'Stage 129',
    targetScore: 12900,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.152,
    modifiers: []
  },
  {
    levelNumber: 130,
    name: 'Stage 130',
    targetScore: 13000,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.152,
    modifiers: []
  },
  {
    levelNumber: 131,
    name: 'Stage 131',
    targetScore: 13100,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.152,
    modifiers: []
  },
  {
    levelNumber: 132,
    name: 'Stage 132',
    targetScore: 13200,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.153,
    modifiers: []
  },
  {
    levelNumber: 133,
    name: 'Stage 133',
    targetScore: 13300,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.153,
    modifiers: []
  },
  {
    levelNumber: 134,
    name: 'Stage 134',
    targetScore: 13400,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.154,
    modifiers: []
  },
  {
    levelNumber: 135,
    name: 'Stage 135',
    targetScore: 13500,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.154,
    modifiers: []
  },
  {
    levelNumber: 136,
    name: 'Stage 136',
    targetScore: 13600,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.154,
    modifiers: []
  },
  {
    levelNumber: 137,
    name: 'Stage 137',
    targetScore: 13700,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.155,
    modifiers: []
  },
  {
    levelNumber: 138,
    name: 'Stage 138',
    targetScore: 13800,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.155,
    modifiers: []
  },
  {
    levelNumber: 139,
    name: 'Stage 139',
    targetScore: 13900,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.156,
    modifiers: []
  },
  {
    levelNumber: 140,
    name: 'Stage 140',
    targetScore: 14000,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.156,
    modifiers: []
  },
  {
    levelNumber: 141,
    name: 'Stage 141',
    targetScore: 14100,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.156,
    modifiers: []
  },
  {
    levelNumber: 142,
    name: 'Stage 142',
    targetScore: 14200,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.157,
    modifiers: []
  },
  {
    levelNumber: 143,
    name: 'Stage 143',
    targetScore: 14300,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.157,
    modifiers: []
  },
  {
    levelNumber: 144,
    name: 'Stage 144',
    targetScore: 14400,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.158,
    modifiers: []
  },
  {
    levelNumber: 145,
    name: 'Stage 145',
    targetScore: 14500,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.158,
    modifiers: []
  },
  {
    levelNumber: 146,
    name: 'Stage 146',
    targetScore: 14600,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.158,
    modifiers: []
  },
  {
    levelNumber: 147,
    name: 'Stage 147',
    targetScore: 14700,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.159,
    modifiers: []
  },
  {
    levelNumber: 148,
    name: 'Stage 148',
    targetScore: 14800,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.159,
    modifiers: []
  },
  {
    levelNumber: 149,
    name: 'Stage 149',
    targetScore: 14900,
    timeLimit: 58,
    gridSize: 6,
    colorSimilarity: 0.160,
    modifiers: []
  },
  {
    levelNumber: 150,
    name: 'Stage 150',
    targetScore: 15000,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.160,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 151,
    name: 'Stage 151',
    targetScore: 15100,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.160,
    modifiers: []
  },
  {
    levelNumber: 152,
    name: 'Stage 152',
    targetScore: 15200,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.161,
    modifiers: []
  },
  {
    levelNumber: 153,
    name: 'Stage 153',
    targetScore: 15300,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.161,
    modifiers: []
  },
  {
    levelNumber: 154,
    name: 'Stage 154',
    targetScore: 15400,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.162,
    modifiers: []
  },
  {
    levelNumber: 155,
    name: 'Stage 155',
    targetScore: 15500,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.162,
    modifiers: []
  },
  {
    levelNumber: 156,
    name: 'Stage 156',
    targetScore: 15600,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.162,
    modifiers: []
  },
  {
    levelNumber: 157,
    name: 'Stage 157',
    targetScore: 15700,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.163,
    modifiers: []
  },
  {
    levelNumber: 158,
    name: 'Stage 158',
    targetScore: 15800,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.163,
    modifiers: []
  },
  {
    levelNumber: 159,
    name: 'Stage 159',
    targetScore: 15900,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.164,
    modifiers: []
  },
  {
    levelNumber: 160,
    name: 'Stage 160',
    targetScore: 16000,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.164,
    modifiers: []
  },
  {
    levelNumber: 161,
    name: 'Stage 161',
    targetScore: 16100,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.164,
    modifiers: []
  },
  {
    levelNumber: 162,
    name: 'Stage 162',
    targetScore: 16200,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.165,
    modifiers: []
  },
  {
    levelNumber: 163,
    name: 'Stage 163',
    targetScore: 16300,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.165,
    modifiers: []
  },
  {
    levelNumber: 164,
    name: 'Stage 164',
    targetScore: 16400,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.166,
    modifiers: []
  },
  {
    levelNumber: 165,
    name: 'Stage 165',
    targetScore: 16500,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.166,
    modifiers: []
  },
  {
    levelNumber: 166,
    name: 'Stage 166',
    targetScore: 16600,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.166,
    modifiers: []
  },
  {
    levelNumber: 167,
    name: 'Stage 167',
    targetScore: 16700,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.167,
    modifiers: []
  },
  {
    levelNumber: 168,
    name: 'Stage 168',
    targetScore: 16800,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.167,
    modifiers: []
  },
  {
    levelNumber: 169,
    name: 'Stage 169',
    targetScore: 16900,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.168,
    modifiers: []
  },
  {
    levelNumber: 170,
    name: 'Stage 170',
    targetScore: 17000,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.168,
    modifiers: []
  },
  {
    levelNumber: 171,
    name: 'Stage 171',
    targetScore: 17100,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.168,
    modifiers: []
  },
  {
    levelNumber: 172,
    name: 'Stage 172',
    targetScore: 17200,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.169,
    modifiers: []
  },
  {
    levelNumber: 173,
    name: 'Stage 173',
    targetScore: 17300,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.169,
    modifiers: []
  },
  {
    levelNumber: 174,
    name: 'Stage 174',
    targetScore: 17400,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.170,
    modifiers: []
  },
  {
    levelNumber: 175,
    name: 'Stage 175',
    targetScore: 17500,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.170,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 176,
    name: 'Stage 176',
    targetScore: 17600,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.170,
    modifiers: []
  },
  {
    levelNumber: 177,
    name: 'Stage 177',
    targetScore: 17700,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.171,
    modifiers: []
  },
  {
    levelNumber: 178,
    name: 'Stage 178',
    targetScore: 17800,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.171,
    modifiers: []
  },
  {
    levelNumber: 179,
    name: 'Stage 179',
    targetScore: 17900,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.172,
    modifiers: []
  },
  {
    levelNumber: 180,
    name: 'Stage 180',
    targetScore: 18000,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.172,
    modifiers: []
  },
  {
    levelNumber: 181,
    name: 'Stage 181',
    targetScore: 18100,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.172,
    modifiers: []
  },
  {
    levelNumber: 182,
    name: 'Stage 182',
    targetScore: 18200,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.173,
    modifiers: []
  },
  {
    levelNumber: 183,
    name: 'Stage 183',
    targetScore: 18300,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.173,
    modifiers: []
  },
  {
    levelNumber: 184,
    name: 'Stage 184',
    targetScore: 18400,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.174,
    modifiers: []
  },
  {
    levelNumber: 185,
    name: 'Stage 185',
    targetScore: 18500,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.174,
    modifiers: []
  },
  {
    levelNumber: 186,
    name: 'Stage 186',
    targetScore: 18600,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.174,
    modifiers: []
  },
  {
    levelNumber: 187,
    name: 'Stage 187',
    targetScore: 18700,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.175,
    modifiers: []
  },
  {
    levelNumber: 188,
    name: 'Stage 188',
    targetScore: 18800,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.175,
    modifiers: []
  },
  {
    levelNumber: 189,
    name: 'Stage 189',
    targetScore: 18900,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.176,
    modifiers: []
  },
  {
    levelNumber: 190,
    name: 'Stage 190',
    targetScore: 19000,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.176,
    modifiers: []
  },
  {
    levelNumber: 191,
    name: 'Stage 191',
    targetScore: 19100,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.176,
    modifiers: []
  },
  {
    levelNumber: 192,
    name: 'Stage 192',
    targetScore: 19200,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.177,
    modifiers: []
  },
  {
    levelNumber: 193,
    name: 'Stage 193',
    targetScore: 19300,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.177,
    modifiers: []
  },
  {
    levelNumber: 194,
    name: 'Stage 194',
    targetScore: 19400,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.178,
    modifiers: []
  },
  {
    levelNumber: 195,
    name: 'Stage 195',
    targetScore: 19500,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.178,
    modifiers: []
  },
  {
    levelNumber: 196,
    name: 'Stage 196',
    targetScore: 19600,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.178,
    modifiers: []
  },
  {
    levelNumber: 197,
    name: 'Stage 197',
    targetScore: 19700,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.179,
    modifiers: []
  },
  {
    levelNumber: 198,
    name: 'Stage 198',
    targetScore: 19800,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.179,
    modifiers: []
  },
  {
    levelNumber: 199,
    name: 'Stage 199',
    targetScore: 19900,
    timeLimit: 57,
    gridSize: 6,
    colorSimilarity: 0.180,
    modifiers: []
  },
  {
    levelNumber: 200,
    name: 'Stage 200',
    targetScore: 20000,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.180,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 201,
    name: 'Stage 201',
    targetScore: 20100,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.180,
    modifiers: []
  },
  {
    levelNumber: 202,
    name: 'Stage 202',
    targetScore: 20200,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.181,
    modifiers: []
  },
  {
    levelNumber: 203,
    name: 'Stage 203',
    targetScore: 20300,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.181,
    modifiers: []
  },
  {
    levelNumber: 204,
    name: 'Stage 204',
    targetScore: 20400,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.182,
    modifiers: []
  },
  {
    levelNumber: 205,
    name: 'Stage 205',
    targetScore: 20500,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.182,
    modifiers: []
  },
  {
    levelNumber: 206,
    name: 'Stage 206',
    targetScore: 20600,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.182,
    modifiers: []
  },
  {
    levelNumber: 207,
    name: 'Stage 207',
    targetScore: 20700,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.183,
    modifiers: []
  },
  {
    levelNumber: 208,
    name: 'Stage 208',
    targetScore: 20800,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.183,
    modifiers: []
  },
  {
    levelNumber: 209,
    name: 'Stage 209',
    targetScore: 20900,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.184,
    modifiers: []
  },
  {
    levelNumber: 210,
    name: 'Stage 210',
    targetScore: 21000,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.184,
    modifiers: []
  },
  {
    levelNumber: 211,
    name: 'Stage 211',
    targetScore: 21100,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.184,
    modifiers: []
  },
  {
    levelNumber: 212,
    name: 'Stage 212',
    targetScore: 21200,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.185,
    modifiers: []
  },
  {
    levelNumber: 213,
    name: 'Stage 213',
    targetScore: 21300,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.185,
    modifiers: []
  },
  {
    levelNumber: 214,
    name: 'Stage 214',
    targetScore: 21400,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.186,
    modifiers: []
  },
  {
    levelNumber: 215,
    name: 'Stage 215',
    targetScore: 21500,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.186,
    modifiers: []
  },
  {
    levelNumber: 216,
    name: 'Stage 216',
    targetScore: 21600,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.186,
    modifiers: []
  },
  {
    levelNumber: 217,
    name: 'Stage 217',
    targetScore: 21700,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.187,
    modifiers: []
  },
  {
    levelNumber: 218,
    name: 'Stage 218',
    targetScore: 21800,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.187,
    modifiers: []
  },
  {
    levelNumber: 219,
    name: 'Stage 219',
    targetScore: 21900,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.188,
    modifiers: []
  },
  {
    levelNumber: 220,
    name: 'Stage 220',
    targetScore: 22000,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.188,
    modifiers: []
  },
  {
    levelNumber: 221,
    name: 'Stage 221',
    targetScore: 22100,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.188,
    modifiers: []
  },
  {
    levelNumber: 222,
    name: 'Stage 222',
    targetScore: 22200,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.189,
    modifiers: []
  },
  {
    levelNumber: 223,
    name: 'Stage 223',
    targetScore: 22300,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.189,
    modifiers: []
  },
  {
    levelNumber: 224,
    name: 'Stage 224',
    targetScore: 22400,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.190,
    modifiers: []
  },
  {
    levelNumber: 225,
    name: 'Stage 225',
    targetScore: 22500,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.190,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 226,
    name: 'Stage 226',
    targetScore: 22600,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.190,
    modifiers: []
  },
  {
    levelNumber: 227,
    name: 'Stage 227',
    targetScore: 22700,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.191,
    modifiers: []
  },
  {
    levelNumber: 228,
    name: 'Stage 228',
    targetScore: 22800,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.191,
    modifiers: []
  },
  {
    levelNumber: 229,
    name: 'Stage 229',
    targetScore: 22900,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.192,
    modifiers: []
  },
  {
    levelNumber: 230,
    name: 'Stage 230',
    targetScore: 23000,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.192,
    modifiers: []
  },
  {
    levelNumber: 231,
    name: 'Stage 231',
    targetScore: 23100,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.192,
    modifiers: []
  },
  {
    levelNumber: 232,
    name: 'Stage 232',
    targetScore: 23200,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.193,
    modifiers: []
  },
  {
    levelNumber: 233,
    name: 'Stage 233',
    targetScore: 23300,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.193,
    modifiers: []
  },
  {
    levelNumber: 234,
    name: 'Stage 234',
    targetScore: 23400,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.194,
    modifiers: []
  },
  {
    levelNumber: 235,
    name: 'Stage 235',
    targetScore: 23500,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.194,
    modifiers: []
  },
  {
    levelNumber: 236,
    name: 'Stage 236',
    targetScore: 23600,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.194,
    modifiers: []
  },
  {
    levelNumber: 237,
    name: 'Stage 237',
    targetScore: 23700,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.195,
    modifiers: []
  },
  {
    levelNumber: 238,
    name: 'Stage 238',
    targetScore: 23800,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.195,
    modifiers: []
  },
  {
    levelNumber: 239,
    name: 'Stage 239',
    targetScore: 23900,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.196,
    modifiers: []
  },
  {
    levelNumber: 240,
    name: 'Stage 240',
    targetScore: 24000,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.196,
    modifiers: []
  },
  {
    levelNumber: 241,
    name: 'Stage 241',
    targetScore: 24100,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.196,
    modifiers: []
  },
  {
    levelNumber: 242,
    name: 'Stage 242',
    targetScore: 24200,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.197,
    modifiers: []
  },
  {
    levelNumber: 243,
    name: 'Stage 243',
    targetScore: 24300,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.197,
    modifiers: []
  },
  {
    levelNumber: 244,
    name: 'Stage 244',
    targetScore: 24400,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.198,
    modifiers: []
  },
  {
    levelNumber: 245,
    name: 'Stage 245',
    targetScore: 24500,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.198,
    modifiers: []
  },
  {
    levelNumber: 246,
    name: 'Stage 246',
    targetScore: 24600,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.198,
    modifiers: []
  },
  {
    levelNumber: 247,
    name: 'Stage 247',
    targetScore: 24700,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.199,
    modifiers: []
  },
  {
    levelNumber: 248,
    name: 'Stage 248',
    targetScore: 24800,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.199,
    modifiers: []
  },
  {
    levelNumber: 249,
    name: 'Stage 249',
    targetScore: 24900,
    timeLimit: 56,
    gridSize: 6,
    colorSimilarity: 0.200,
    modifiers: []
  },
  {
    levelNumber: 250,
    name: 'Stage 250',
    targetScore: 25000,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.200,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 251,
    name: 'Stage 251',
    targetScore: 25100,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.200,
    modifiers: []
  },
  {
    levelNumber: 252,
    name: 'Stage 252',
    targetScore: 25200,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.201,
    modifiers: []
  },
  {
    levelNumber: 253,
    name: 'Stage 253',
    targetScore: 25300,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.201,
    modifiers: []
  },
  {
    levelNumber: 254,
    name: 'Stage 254',
    targetScore: 25400,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.202,
    modifiers: []
  },
  {
    levelNumber: 255,
    name: 'Stage 255',
    targetScore: 25500,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.202,
    modifiers: []
  },
  {
    levelNumber: 256,
    name: 'Stage 256',
    targetScore: 25600,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.202,
    modifiers: []
  },
  {
    levelNumber: 257,
    name: 'Stage 257',
    targetScore: 25700,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.203,
    modifiers: []
  },
  {
    levelNumber: 258,
    name: 'Stage 258',
    targetScore: 25800,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.203,
    modifiers: []
  },
  {
    levelNumber: 259,
    name: 'Stage 259',
    targetScore: 25900,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.204,
    modifiers: []
  },
  {
    levelNumber: 260,
    name: 'Stage 260',
    targetScore: 26000,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.204,
    modifiers: []
  },
  {
    levelNumber: 261,
    name: 'Stage 261',
    targetScore: 26100,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.204,
    modifiers: []
  },
  {
    levelNumber: 262,
    name: 'Stage 262',
    targetScore: 26200,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.205,
    modifiers: []
  },
  {
    levelNumber: 263,
    name: 'Stage 263',
    targetScore: 26300,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.205,
    modifiers: []
  },
  {
    levelNumber: 264,
    name: 'Stage 264',
    targetScore: 26400,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.206,
    modifiers: []
  },
  {
    levelNumber: 265,
    name: 'Stage 265',
    targetScore: 26500,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.206,
    modifiers: []
  },
  {
    levelNumber: 266,
    name: 'Stage 266',
    targetScore: 26600,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.206,
    modifiers: []
  },
  {
    levelNumber: 267,
    name: 'Stage 267',
    targetScore: 26700,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.207,
    modifiers: []
  },
  {
    levelNumber: 268,
    name: 'Stage 268',
    targetScore: 26800,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.207,
    modifiers: []
  },
  {
    levelNumber: 269,
    name: 'Stage 269',
    targetScore: 26900,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.208,
    modifiers: []
  },
  {
    levelNumber: 270,
    name: 'Stage 270',
    targetScore: 27000,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.208,
    modifiers: []
  },
  {
    levelNumber: 271,
    name: 'Stage 271',
    targetScore: 27100,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.208,
    modifiers: []
  },
  {
    levelNumber: 272,
    name: 'Stage 272',
    targetScore: 27200,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.209,
    modifiers: []
  },
  {
    levelNumber: 273,
    name: 'Stage 273',
    targetScore: 27300,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.209,
    modifiers: []
  },
  {
    levelNumber: 274,
    name: 'Stage 274',
    targetScore: 27400,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.210,
    modifiers: []
  },
  {
    levelNumber: 275,
    name: 'Stage 275',
    targetScore: 27500,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.210,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 276,
    name: 'Stage 276',
    targetScore: 27600,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.210,
    modifiers: []
  },
  {
    levelNumber: 277,
    name: 'Stage 277',
    targetScore: 27700,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.211,
    modifiers: []
  },
  {
    levelNumber: 278,
    name: 'Stage 278',
    targetScore: 27800,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.211,
    modifiers: []
  },
  {
    levelNumber: 279,
    name: 'Stage 279',
    targetScore: 27900,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.212,
    modifiers: []
  },
  {
    levelNumber: 280,
    name: 'Stage 280',
    targetScore: 28000,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.212,
    modifiers: []
  },
  {
    levelNumber: 281,
    name: 'Stage 281',
    targetScore: 28100,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.212,
    modifiers: []
  },
  {
    levelNumber: 282,
    name: 'Stage 282',
    targetScore: 28200,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.213,
    modifiers: []
  },
  {
    levelNumber: 283,
    name: 'Stage 283',
    targetScore: 28300,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.213,
    modifiers: []
  },
  {
    levelNumber: 284,
    name: 'Stage 284',
    targetScore: 28400,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.214,
    modifiers: []
  },
  {
    levelNumber: 285,
    name: 'Stage 285',
    targetScore: 28500,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.214,
    modifiers: []
  },
  {
    levelNumber: 286,
    name: 'Stage 286',
    targetScore: 28600,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.214,
    modifiers: []
  },
  {
    levelNumber: 287,
    name: 'Stage 287',
    targetScore: 28700,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.215,
    modifiers: []
  },
  {
    levelNumber: 288,
    name: 'Stage 288',
    targetScore: 28800,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.215,
    modifiers: []
  },
  {
    levelNumber: 289,
    name: 'Stage 289',
    targetScore: 28900,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.216,
    modifiers: []
  },
  {
    levelNumber: 290,
    name: 'Stage 290',
    targetScore: 29000,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.216,
    modifiers: []
  },
  {
    levelNumber: 291,
    name: 'Stage 291',
    targetScore: 29100,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.216,
    modifiers: []
  },
  {
    levelNumber: 292,
    name: 'Stage 292',
    targetScore: 29200,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.217,
    modifiers: []
  },
  {
    levelNumber: 293,
    name: 'Stage 293',
    targetScore: 29300,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.217,
    modifiers: []
  },
  {
    levelNumber: 294,
    name: 'Stage 294',
    targetScore: 29400,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.218,
    modifiers: []
  },
  {
    levelNumber: 295,
    name: 'Stage 295',
    targetScore: 29500,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.218,
    modifiers: []
  },
  {
    levelNumber: 296,
    name: 'Stage 296',
    targetScore: 29600,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.218,
    modifiers: []
  },
  {
    levelNumber: 297,
    name: 'Stage 297',
    targetScore: 29700,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.219,
    modifiers: []
  },
  {
    levelNumber: 298,
    name: 'Stage 298',
    targetScore: 29800,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.219,
    modifiers: []
  },
  {
    levelNumber: 299,
    name: 'Stage 299',
    targetScore: 29900,
    timeLimit: 55,
    gridSize: 6,
    colorSimilarity: 0.220,
    modifiers: []
  },
  {
    levelNumber: 300,
    name: 'Stage 300',
    targetScore: 30000,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.220,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 301,
    name: 'Stage 301',
    targetScore: 30100,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.220,
    modifiers: []
  },
  {
    levelNumber: 302,
    name: 'Stage 302',
    targetScore: 30200,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.221,
    modifiers: []
  },
  {
    levelNumber: 303,
    name: 'Stage 303',
    targetScore: 30300,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.221,
    modifiers: []
  },
  {
    levelNumber: 304,
    name: 'Stage 304',
    targetScore: 30400,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.222,
    modifiers: []
  },
  {
    levelNumber: 305,
    name: 'Stage 305',
    targetScore: 30500,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.222,
    modifiers: []
  },
  {
    levelNumber: 306,
    name: 'Stage 306',
    targetScore: 30600,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.222,
    modifiers: []
  },
  {
    levelNumber: 307,
    name: 'Stage 307',
    targetScore: 30700,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.223,
    modifiers: []
  },
  {
    levelNumber: 308,
    name: 'Stage 308',
    targetScore: 30800,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.223,
    modifiers: []
  },
  {
    levelNumber: 309,
    name: 'Stage 309',
    targetScore: 30900,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.224,
    modifiers: []
  },
  {
    levelNumber: 310,
    name: 'Stage 310',
    targetScore: 31000,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.224,
    modifiers: []
  },
  {
    levelNumber: 311,
    name: 'Stage 311',
    targetScore: 31100,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.224,
    modifiers: []
  },
  {
    levelNumber: 312,
    name: 'Stage 312',
    targetScore: 31200,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.225,
    modifiers: []
  },
  {
    levelNumber: 313,
    name: 'Stage 313',
    targetScore: 31300,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.225,
    modifiers: []
  },
  {
    levelNumber: 314,
    name: 'Stage 314',
    targetScore: 31400,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.226,
    modifiers: []
  },
  {
    levelNumber: 315,
    name: 'Stage 315',
    targetScore: 31500,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.226,
    modifiers: []
  },
  {
    levelNumber: 316,
    name: 'Stage 316',
    targetScore: 31600,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.226,
    modifiers: []
  },
  {
    levelNumber: 317,
    name: 'Stage 317',
    targetScore: 31700,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.227,
    modifiers: []
  },
  {
    levelNumber: 318,
    name: 'Stage 318',
    targetScore: 31800,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.227,
    modifiers: []
  },
  {
    levelNumber: 319,
    name: 'Stage 319',
    targetScore: 31900,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.228,
    modifiers: []
  },
  {
    levelNumber: 320,
    name: 'Stage 320',
    targetScore: 32000,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.228,
    modifiers: []
  },
  {
    levelNumber: 321,
    name: 'Stage 321',
    targetScore: 32100,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.228,
    modifiers: []
  },
  {
    levelNumber: 322,
    name: 'Stage 322',
    targetScore: 32200,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.229,
    modifiers: []
  },
  {
    levelNumber: 323,
    name: 'Stage 323',
    targetScore: 32300,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.229,
    modifiers: []
  },
  {
    levelNumber: 324,
    name: 'Stage 324',
    targetScore: 32400,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.230,
    modifiers: []
  },
  {
    levelNumber: 325,
    name: 'Stage 325',
    targetScore: 32500,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.230,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 326,
    name: 'Stage 326',
    targetScore: 32600,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.230,
    modifiers: []
  },
  {
    levelNumber: 327,
    name: 'Stage 327',
    targetScore: 32700,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.231,
    modifiers: []
  },
  {
    levelNumber: 328,
    name: 'Stage 328',
    targetScore: 32800,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.231,
    modifiers: []
  },
  {
    levelNumber: 329,
    name: 'Stage 329',
    targetScore: 32900,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.232,
    modifiers: []
  },
  {
    levelNumber: 330,
    name: 'Stage 330',
    targetScore: 33000,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.232,
    modifiers: []
  },
  {
    levelNumber: 331,
    name: 'Stage 331',
    targetScore: 33100,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.232,
    modifiers: []
  },
  {
    levelNumber: 332,
    name: 'Stage 332',
    targetScore: 33200,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.233,
    modifiers: []
  },
  {
    levelNumber: 333,
    name: 'Stage 333',
    targetScore: 33300,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.233,
    modifiers: []
  },
  {
    levelNumber: 334,
    name: 'Stage 334',
    targetScore: 33400,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.234,
    modifiers: []
  },
  {
    levelNumber: 335,
    name: 'Stage 335',
    targetScore: 33500,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.234,
    modifiers: []
  },
  {
    levelNumber: 336,
    name: 'Stage 336',
    targetScore: 33600,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.234,
    modifiers: []
  },
  {
    levelNumber: 337,
    name: 'Stage 337',
    targetScore: 33700,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.235,
    modifiers: []
  },
  {
    levelNumber: 338,
    name: 'Stage 338',
    targetScore: 33800,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.235,
    modifiers: []
  },
  {
    levelNumber: 339,
    name: 'Stage 339',
    targetScore: 33900,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.236,
    modifiers: []
  },
  {
    levelNumber: 340,
    name: 'Stage 340',
    targetScore: 34000,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.236,
    modifiers: []
  },
  {
    levelNumber: 341,
    name: 'Stage 341',
    targetScore: 34100,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.236,
    modifiers: []
  },
  {
    levelNumber: 342,
    name: 'Stage 342',
    targetScore: 34200,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.237,
    modifiers: []
  },
  {
    levelNumber: 343,
    name: 'Stage 343',
    targetScore: 34300,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.237,
    modifiers: []
  },
  {
    levelNumber: 344,
    name: 'Stage 344',
    targetScore: 34400,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.238,
    modifiers: []
  },
  {
    levelNumber: 345,
    name: 'Stage 345',
    targetScore: 34500,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.238,
    modifiers: []
  },
  {
    levelNumber: 346,
    name: 'Stage 346',
    targetScore: 34600,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.238,
    modifiers: []
  },
  {
    levelNumber: 347,
    name: 'Stage 347',
    targetScore: 34700,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.239,
    modifiers: []
  },
  {
    levelNumber: 348,
    name: 'Stage 348',
    targetScore: 34800,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.239,
    modifiers: []
  },
  {
    levelNumber: 349,
    name: 'Stage 349',
    targetScore: 34900,
    timeLimit: 54,
    gridSize: 6,
    colorSimilarity: 0.240,
    modifiers: []
  },
  {
    levelNumber: 350,
    name: 'Stage 350',
    targetScore: 35000,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.240,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 351,
    name: 'Stage 351',
    targetScore: 35100,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.240,
    modifiers: []
  },
  {
    levelNumber: 352,
    name: 'Stage 352',
    targetScore: 35200,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.241,
    modifiers: []
  },
  {
    levelNumber: 353,
    name: 'Stage 353',
    targetScore: 35300,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.241,
    modifiers: []
  },
  {
    levelNumber: 354,
    name: 'Stage 354',
    targetScore: 35400,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.242,
    modifiers: []
  },
  {
    levelNumber: 355,
    name: 'Stage 355',
    targetScore: 35500,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.242,
    modifiers: []
  },
  {
    levelNumber: 356,
    name: 'Stage 356',
    targetScore: 35600,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.242,
    modifiers: []
  },
  {
    levelNumber: 357,
    name: 'Stage 357',
    targetScore: 35700,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.243,
    modifiers: []
  },
  {
    levelNumber: 358,
    name: 'Stage 358',
    targetScore: 35800,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.243,
    modifiers: []
  },
  {
    levelNumber: 359,
    name: 'Stage 359',
    targetScore: 35900,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.244,
    modifiers: []
  },
  {
    levelNumber: 360,
    name: 'Stage 360',
    targetScore: 36000,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.244,
    modifiers: []
  },
  {
    levelNumber: 361,
    name: 'Stage 361',
    targetScore: 36100,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.244,
    modifiers: []
  },
  {
    levelNumber: 362,
    name: 'Stage 362',
    targetScore: 36200,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.245,
    modifiers: []
  },
  {
    levelNumber: 363,
    name: 'Stage 363',
    targetScore: 36300,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.245,
    modifiers: []
  },
  {
    levelNumber: 364,
    name: 'Stage 364',
    targetScore: 36400,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.246,
    modifiers: []
  },
  {
    levelNumber: 365,
    name: 'Stage 365',
    targetScore: 36500,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.246,
    modifiers: []
  },
  {
    levelNumber: 366,
    name: 'Stage 366',
    targetScore: 36600,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.246,
    modifiers: []
  },
  {
    levelNumber: 367,
    name: 'Stage 367',
    targetScore: 36700,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.247,
    modifiers: []
  },
  {
    levelNumber: 368,
    name: 'Stage 368',
    targetScore: 36800,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.247,
    modifiers: []
  },
  {
    levelNumber: 369,
    name: 'Stage 369',
    targetScore: 36900,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.248,
    modifiers: []
  },
  {
    levelNumber: 370,
    name: 'Stage 370',
    targetScore: 37000,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.248,
    modifiers: []
  },
  {
    levelNumber: 371,
    name: 'Stage 371',
    targetScore: 37100,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.248,
    modifiers: []
  },
  {
    levelNumber: 372,
    name: 'Stage 372',
    targetScore: 37200,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.249,
    modifiers: []
  },
  {
    levelNumber: 373,
    name: 'Stage 373',
    targetScore: 37300,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.249,
    modifiers: []
  },
  {
    levelNumber: 374,
    name: 'Stage 374',
    targetScore: 37400,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.250,
    modifiers: []
  },
  {
    levelNumber: 375,
    name: 'Stage 375',
    targetScore: 37500,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.250,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 376,
    name: 'Stage 376',
    targetScore: 37600,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.250,
    modifiers: []
  },
  {
    levelNumber: 377,
    name: 'Stage 377',
    targetScore: 37700,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.251,
    modifiers: []
  },
  {
    levelNumber: 378,
    name: 'Stage 378',
    targetScore: 37800,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.251,
    modifiers: []
  },
  {
    levelNumber: 379,
    name: 'Stage 379',
    targetScore: 37900,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.252,
    modifiers: []
  },
  {
    levelNumber: 380,
    name: 'Stage 380',
    targetScore: 38000,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.252,
    modifiers: []
  },
  {
    levelNumber: 381,
    name: 'Stage 381',
    targetScore: 38100,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.252,
    modifiers: []
  },
  {
    levelNumber: 382,
    name: 'Stage 382',
    targetScore: 38200,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.253,
    modifiers: []
  },
  {
    levelNumber: 383,
    name: 'Stage 383',
    targetScore: 38300,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.253,
    modifiers: []
  },
  {
    levelNumber: 384,
    name: 'Stage 384',
    targetScore: 38400,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.254,
    modifiers: []
  },
  {
    levelNumber: 385,
    name: 'Stage 385',
    targetScore: 38500,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.254,
    modifiers: []
  },
  {
    levelNumber: 386,
    name: 'Stage 386',
    targetScore: 38600,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.254,
    modifiers: []
  },
  {
    levelNumber: 387,
    name: 'Stage 387',
    targetScore: 38700,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.255,
    modifiers: []
  },
  {
    levelNumber: 388,
    name: 'Stage 388',
    targetScore: 38800,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.255,
    modifiers: []
  },
  {
    levelNumber: 389,
    name: 'Stage 389',
    targetScore: 38900,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.256,
    modifiers: []
  },
  {
    levelNumber: 390,
    name: 'Stage 390',
    targetScore: 39000,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.256,
    modifiers: []
  },
  {
    levelNumber: 391,
    name: 'Stage 391',
    targetScore: 39100,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.256,
    modifiers: []
  },
  {
    levelNumber: 392,
    name: 'Stage 392',
    targetScore: 39200,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.257,
    modifiers: []
  },
  {
    levelNumber: 393,
    name: 'Stage 393',
    targetScore: 39300,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.257,
    modifiers: []
  },
  {
    levelNumber: 394,
    name: 'Stage 394',
    targetScore: 39400,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.258,
    modifiers: []
  },
  {
    levelNumber: 395,
    name: 'Stage 395',
    targetScore: 39500,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.258,
    modifiers: []
  },
  {
    levelNumber: 396,
    name: 'Stage 396',
    targetScore: 39600,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.258,
    modifiers: []
  },
  {
    levelNumber: 397,
    name: 'Stage 397',
    targetScore: 39700,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.259,
    modifiers: []
  },
  {
    levelNumber: 398,
    name: 'Stage 398',
    targetScore: 39800,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.259,
    modifiers: []
  },
  {
    levelNumber: 399,
    name: 'Stage 399',
    targetScore: 39900,
    timeLimit: 53,
    gridSize: 6,
    colorSimilarity: 0.260,
    modifiers: []
  },
  {
    levelNumber: 400,
    name: 'Stage 400',
    targetScore: 40000,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.260,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 401,
    name: 'Stage 401',
    targetScore: 40100,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.260,
    modifiers: []
  },
  {
    levelNumber: 402,
    name: 'Stage 402',
    targetScore: 40200,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.261,
    modifiers: []
  },
  {
    levelNumber: 403,
    name: 'Stage 403',
    targetScore: 40300,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.261,
    modifiers: []
  },
  {
    levelNumber: 404,
    name: 'Stage 404',
    targetScore: 40400,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.262,
    modifiers: []
  },
  {
    levelNumber: 405,
    name: 'Stage 405',
    targetScore: 40500,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.262,
    modifiers: []
  },
  {
    levelNumber: 406,
    name: 'Stage 406',
    targetScore: 40600,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.262,
    modifiers: []
  },
  {
    levelNumber: 407,
    name: 'Stage 407',
    targetScore: 40700,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.263,
    modifiers: []
  },
  {
    levelNumber: 408,
    name: 'Stage 408',
    targetScore: 40800,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.263,
    modifiers: []
  },
  {
    levelNumber: 409,
    name: 'Stage 409',
    targetScore: 40900,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.264,
    modifiers: []
  },
  {
    levelNumber: 410,
    name: 'Stage 410',
    targetScore: 41000,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.264,
    modifiers: []
  },
  {
    levelNumber: 411,
    name: 'Stage 411',
    targetScore: 41100,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.264,
    modifiers: []
  },
  {
    levelNumber: 412,
    name: 'Stage 412',
    targetScore: 41200,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.265,
    modifiers: []
  },
  {
    levelNumber: 413,
    name: 'Stage 413',
    targetScore: 41300,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.265,
    modifiers: []
  },
  {
    levelNumber: 414,
    name: 'Stage 414',
    targetScore: 41400,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.266,
    modifiers: []
  },
  {
    levelNumber: 415,
    name: 'Stage 415',
    targetScore: 41500,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.266,
    modifiers: []
  },
  {
    levelNumber: 416,
    name: 'Stage 416',
    targetScore: 41600,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.266,
    modifiers: []
  },
  {
    levelNumber: 417,
    name: 'Stage 417',
    targetScore: 41700,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.267,
    modifiers: []
  },
  {
    levelNumber: 418,
    name: 'Stage 418',
    targetScore: 41800,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.267,
    modifiers: []
  },
  {
    levelNumber: 419,
    name: 'Stage 419',
    targetScore: 41900,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.268,
    modifiers: []
  },
  {
    levelNumber: 420,
    name: 'Stage 420',
    targetScore: 42000,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.268,
    modifiers: []
  },
  {
    levelNumber: 421,
    name: 'Stage 421',
    targetScore: 42100,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.268,
    modifiers: []
  },
  {
    levelNumber: 422,
    name: 'Stage 422',
    targetScore: 42200,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.269,
    modifiers: []
  },
  {
    levelNumber: 423,
    name: 'Stage 423',
    targetScore: 42300,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.269,
    modifiers: []
  },
  {
    levelNumber: 424,
    name: 'Stage 424',
    targetScore: 42400,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.270,
    modifiers: []
  },
  {
    levelNumber: 425,
    name: 'Stage 425',
    targetScore: 42500,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.270,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 426,
    name: 'Stage 426',
    targetScore: 42600,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.270,
    modifiers: []
  },
  {
    levelNumber: 427,
    name: 'Stage 427',
    targetScore: 42700,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.271,
    modifiers: []
  },
  {
    levelNumber: 428,
    name: 'Stage 428',
    targetScore: 42800,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.271,
    modifiers: []
  },
  {
    levelNumber: 429,
    name: 'Stage 429',
    targetScore: 42900,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.272,
    modifiers: []
  },
  {
    levelNumber: 430,
    name: 'Stage 430',
    targetScore: 43000,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.272,
    modifiers: []
  },
  {
    levelNumber: 431,
    name: 'Stage 431',
    targetScore: 43100,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.272,
    modifiers: []
  },
  {
    levelNumber: 432,
    name: 'Stage 432',
    targetScore: 43200,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.273,
    modifiers: []
  },
  {
    levelNumber: 433,
    name: 'Stage 433',
    targetScore: 43300,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.273,
    modifiers: []
  },
  {
    levelNumber: 434,
    name: 'Stage 434',
    targetScore: 43400,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.274,
    modifiers: []
  },
  {
    levelNumber: 435,
    name: 'Stage 435',
    targetScore: 43500,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.274,
    modifiers: []
  },
  {
    levelNumber: 436,
    name: 'Stage 436',
    targetScore: 43600,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.274,
    modifiers: []
  },
  {
    levelNumber: 437,
    name: 'Stage 437',
    targetScore: 43700,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.275,
    modifiers: []
  },
  {
    levelNumber: 438,
    name: 'Stage 438',
    targetScore: 43800,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.275,
    modifiers: []
  },
  {
    levelNumber: 439,
    name: 'Stage 439',
    targetScore: 43900,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.276,
    modifiers: []
  },
  {
    levelNumber: 440,
    name: 'Stage 440',
    targetScore: 44000,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.276,
    modifiers: []
  },
  {
    levelNumber: 441,
    name: 'Stage 441',
    targetScore: 44100,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.276,
    modifiers: []
  },
  {
    levelNumber: 442,
    name: 'Stage 442',
    targetScore: 44200,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.277,
    modifiers: []
  },
  {
    levelNumber: 443,
    name: 'Stage 443',
    targetScore: 44300,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.277,
    modifiers: []
  },
  {
    levelNumber: 444,
    name: 'Stage 444',
    targetScore: 44400,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.278,
    modifiers: []
  },
  {
    levelNumber: 445,
    name: 'Stage 445',
    targetScore: 44500,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.278,
    modifiers: []
  },
  {
    levelNumber: 446,
    name: 'Stage 446',
    targetScore: 44600,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.278,
    modifiers: []
  },
  {
    levelNumber: 447,
    name: 'Stage 447',
    targetScore: 44700,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.279,
    modifiers: []
  },
  {
    levelNumber: 448,
    name: 'Stage 448',
    targetScore: 44800,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.279,
    modifiers: []
  },
  {
    levelNumber: 449,
    name: 'Stage 449',
    targetScore: 44900,
    timeLimit: 52,
    gridSize: 6,
    colorSimilarity: 0.280,
    modifiers: []
  },
  {
    levelNumber: 450,
    name: 'Stage 450',
    targetScore: 45000,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.280,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 451,
    name: 'Stage 451',
    targetScore: 45100,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.280,
    modifiers: []
  },
  {
    levelNumber: 452,
    name: 'Stage 452',
    targetScore: 45200,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.281,
    modifiers: []
  },
  {
    levelNumber: 453,
    name: 'Stage 453',
    targetScore: 45300,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.281,
    modifiers: []
  },
  {
    levelNumber: 454,
    name: 'Stage 454',
    targetScore: 45400,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.282,
    modifiers: []
  },
  {
    levelNumber: 455,
    name: 'Stage 455',
    targetScore: 45500,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.282,
    modifiers: []
  },
  {
    levelNumber: 456,
    name: 'Stage 456',
    targetScore: 45600,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.282,
    modifiers: []
  },
  {
    levelNumber: 457,
    name: 'Stage 457',
    targetScore: 45700,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.283,
    modifiers: []
  },
  {
    levelNumber: 458,
    name: 'Stage 458',
    targetScore: 45800,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.283,
    modifiers: []
  },
  {
    levelNumber: 459,
    name: 'Stage 459',
    targetScore: 45900,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.284,
    modifiers: []
  },
  {
    levelNumber: 460,
    name: 'Stage 460',
    targetScore: 46000,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.284,
    modifiers: []
  },
  {
    levelNumber: 461,
    name: 'Stage 461',
    targetScore: 46100,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.284,
    modifiers: []
  },
  {
    levelNumber: 462,
    name: 'Stage 462',
    targetScore: 46200,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.285,
    modifiers: []
  },
  {
    levelNumber: 463,
    name: 'Stage 463',
    targetScore: 46300,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.285,
    modifiers: []
  },
  {
    levelNumber: 464,
    name: 'Stage 464',
    targetScore: 46400,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.286,
    modifiers: []
  },
  {
    levelNumber: 465,
    name: 'Stage 465',
    targetScore: 46500,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.286,
    modifiers: []
  },
  {
    levelNumber: 466,
    name: 'Stage 466',
    targetScore: 46600,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.286,
    modifiers: []
  },
  {
    levelNumber: 467,
    name: 'Stage 467',
    targetScore: 46700,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.287,
    modifiers: []
  },
  {
    levelNumber: 468,
    name: 'Stage 468',
    targetScore: 46800,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.287,
    modifiers: []
  },
  {
    levelNumber: 469,
    name: 'Stage 469',
    targetScore: 46900,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.288,
    modifiers: []
  },
  {
    levelNumber: 470,
    name: 'Stage 470',
    targetScore: 47000,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.288,
    modifiers: []
  },
  {
    levelNumber: 471,
    name: 'Stage 471',
    targetScore: 47100,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.288,
    modifiers: []
  },
  {
    levelNumber: 472,
    name: 'Stage 472',
    targetScore: 47200,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.289,
    modifiers: []
  },
  {
    levelNumber: 473,
    name: 'Stage 473',
    targetScore: 47300,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.289,
    modifiers: []
  },
  {
    levelNumber: 474,
    name: 'Stage 474',
    targetScore: 47400,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.290,
    modifiers: []
  },
  {
    levelNumber: 475,
    name: 'Stage 475',
    targetScore: 47500,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.290,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 476,
    name: 'Stage 476',
    targetScore: 47600,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.290,
    modifiers: []
  },
  {
    levelNumber: 477,
    name: 'Stage 477',
    targetScore: 47700,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.291,
    modifiers: []
  },
  {
    levelNumber: 478,
    name: 'Stage 478',
    targetScore: 47800,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.291,
    modifiers: []
  },
  {
    levelNumber: 479,
    name: 'Stage 479',
    targetScore: 47900,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.292,
    modifiers: []
  },
  {
    levelNumber: 480,
    name: 'Stage 480',
    targetScore: 48000,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.292,
    modifiers: []
  },
  {
    levelNumber: 481,
    name: 'Stage 481',
    targetScore: 48100,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.292,
    modifiers: []
  },
  {
    levelNumber: 482,
    name: 'Stage 482',
    targetScore: 48200,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.293,
    modifiers: []
  },
  {
    levelNumber: 483,
    name: 'Stage 483',
    targetScore: 48300,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.293,
    modifiers: []
  },
  {
    levelNumber: 484,
    name: 'Stage 484',
    targetScore: 48400,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.294,
    modifiers: []
  },
  {
    levelNumber: 485,
    name: 'Stage 485',
    targetScore: 48500,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.294,
    modifiers: []
  },
  {
    levelNumber: 486,
    name: 'Stage 486',
    targetScore: 48600,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.294,
    modifiers: []
  },
  {
    levelNumber: 487,
    name: 'Stage 487',
    targetScore: 48700,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.295,
    modifiers: []
  },
  {
    levelNumber: 488,
    name: 'Stage 488',
    targetScore: 48800,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.295,
    modifiers: []
  },
  {
    levelNumber: 489,
    name: 'Stage 489',
    targetScore: 48900,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.296,
    modifiers: []
  },
  {
    levelNumber: 490,
    name: 'Stage 490',
    targetScore: 49000,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.296,
    modifiers: []
  },
  {
    levelNumber: 491,
    name: 'Stage 491',
    targetScore: 49100,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.296,
    modifiers: []
  },
  {
    levelNumber: 492,
    name: 'Stage 492',
    targetScore: 49200,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.297,
    modifiers: []
  },
  {
    levelNumber: 493,
    name: 'Stage 493',
    targetScore: 49300,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.297,
    modifiers: []
  },
  {
    levelNumber: 494,
    name: 'Stage 494',
    targetScore: 49400,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.298,
    modifiers: []
  },
  {
    levelNumber: 495,
    name: 'Stage 495',
    targetScore: 49500,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.298,
    modifiers: []
  },
  {
    levelNumber: 496,
    name: 'Stage 496',
    targetScore: 49600,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.298,
    modifiers: []
  },
  {
    levelNumber: 497,
    name: 'Stage 497',
    targetScore: 49700,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.299,
    modifiers: []
  },
  {
    levelNumber: 498,
    name: 'Stage 498',
    targetScore: 49800,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.299,
    modifiers: []
  },
  {
    levelNumber: 499,
    name: 'Stage 499',
    targetScore: 49900,
    timeLimit: 51,
    gridSize: 6,
    colorSimilarity: 0.300,
    modifiers: []
  },
  {
    levelNumber: 500,
    name: 'Stage 500',
    targetScore: 50000,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.300,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 501,
    name: 'Stage 501',
    targetScore: 50100,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.300,
    modifiers: []
  },
  {
    levelNumber: 502,
    name: 'Stage 502',
    targetScore: 50200,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.301,
    modifiers: []
  },
  {
    levelNumber: 503,
    name: 'Stage 503',
    targetScore: 50300,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.301,
    modifiers: []
  },
  {
    levelNumber: 504,
    name: 'Stage 504',
    targetScore: 50400,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.302,
    modifiers: []
  },
  {
    levelNumber: 505,
    name: 'Stage 505',
    targetScore: 50500,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.302,
    modifiers: []
  },
  {
    levelNumber: 506,
    name: 'Stage 506',
    targetScore: 50600,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.302,
    modifiers: []
  },
  {
    levelNumber: 507,
    name: 'Stage 507',
    targetScore: 50700,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.303,
    modifiers: []
  },
  {
    levelNumber: 508,
    name: 'Stage 508',
    targetScore: 50800,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.303,
    modifiers: []
  },
  {
    levelNumber: 509,
    name: 'Stage 509',
    targetScore: 50900,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.304,
    modifiers: []
  },
  {
    levelNumber: 510,
    name: 'Stage 510',
    targetScore: 51000,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.304,
    modifiers: []
  },
  {
    levelNumber: 511,
    name: 'Stage 511',
    targetScore: 51100,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.304,
    modifiers: []
  },
  {
    levelNumber: 512,
    name: 'Stage 512',
    targetScore: 51200,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.305,
    modifiers: []
  },
  {
    levelNumber: 513,
    name: 'Stage 513',
    targetScore: 51300,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.305,
    modifiers: []
  },
  {
    levelNumber: 514,
    name: 'Stage 514',
    targetScore: 51400,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.306,
    modifiers: []
  },
  {
    levelNumber: 515,
    name: 'Stage 515',
    targetScore: 51500,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.306,
    modifiers: []
  },
  {
    levelNumber: 516,
    name: 'Stage 516',
    targetScore: 51600,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.306,
    modifiers: []
  },
  {
    levelNumber: 517,
    name: 'Stage 517',
    targetScore: 51700,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.307,
    modifiers: []
  },
  {
    levelNumber: 518,
    name: 'Stage 518',
    targetScore: 51800,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.307,
    modifiers: []
  },
  {
    levelNumber: 519,
    name: 'Stage 519',
    targetScore: 51900,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.308,
    modifiers: []
  },
  {
    levelNumber: 520,
    name: 'Stage 520',
    targetScore: 52000,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.308,
    modifiers: []
  },
  {
    levelNumber: 521,
    name: 'Stage 521',
    targetScore: 52100,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.308,
    modifiers: []
  },
  {
    levelNumber: 522,
    name: 'Stage 522',
    targetScore: 52200,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.309,
    modifiers: []
  },
  {
    levelNumber: 523,
    name: 'Stage 523',
    targetScore: 52300,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.309,
    modifiers: []
  },
  {
    levelNumber: 524,
    name: 'Stage 524',
    targetScore: 52400,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.310,
    modifiers: []
  },
  {
    levelNumber: 525,
    name: 'Stage 525',
    targetScore: 52500,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.310,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 526,
    name: 'Stage 526',
    targetScore: 52600,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.310,
    modifiers: []
  },
  {
    levelNumber: 527,
    name: 'Stage 527',
    targetScore: 52700,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.311,
    modifiers: []
  },
  {
    levelNumber: 528,
    name: 'Stage 528',
    targetScore: 52800,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.311,
    modifiers: []
  },
  {
    levelNumber: 529,
    name: 'Stage 529',
    targetScore: 52900,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.312,
    modifiers: []
  },
  {
    levelNumber: 530,
    name: 'Stage 530',
    targetScore: 53000,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.312,
    modifiers: []
  },
  {
    levelNumber: 531,
    name: 'Stage 531',
    targetScore: 53100,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.312,
    modifiers: []
  },
  {
    levelNumber: 532,
    name: 'Stage 532',
    targetScore: 53200,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.313,
    modifiers: []
  },
  {
    levelNumber: 533,
    name: 'Stage 533',
    targetScore: 53300,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.313,
    modifiers: []
  },
  {
    levelNumber: 534,
    name: 'Stage 534',
    targetScore: 53400,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.314,
    modifiers: []
  },
  {
    levelNumber: 535,
    name: 'Stage 535',
    targetScore: 53500,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.314,
    modifiers: []
  },
  {
    levelNumber: 536,
    name: 'Stage 536',
    targetScore: 53600,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.314,
    modifiers: []
  },
  {
    levelNumber: 537,
    name: 'Stage 537',
    targetScore: 53700,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.315,
    modifiers: []
  },
  {
    levelNumber: 538,
    name: 'Stage 538',
    targetScore: 53800,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.315,
    modifiers: []
  },
  {
    levelNumber: 539,
    name: 'Stage 539',
    targetScore: 53900,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.316,
    modifiers: []
  },
  {
    levelNumber: 540,
    name: 'Stage 540',
    targetScore: 54000,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.316,
    modifiers: []
  },
  {
    levelNumber: 541,
    name: 'Stage 541',
    targetScore: 54100,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.316,
    modifiers: []
  },
  {
    levelNumber: 542,
    name: 'Stage 542',
    targetScore: 54200,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.317,
    modifiers: []
  },
  {
    levelNumber: 543,
    name: 'Stage 543',
    targetScore: 54300,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.317,
    modifiers: []
  },
  {
    levelNumber: 544,
    name: 'Stage 544',
    targetScore: 54400,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.318,
    modifiers: []
  },
  {
    levelNumber: 545,
    name: 'Stage 545',
    targetScore: 54500,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.318,
    modifiers: []
  },
  {
    levelNumber: 546,
    name: 'Stage 546',
    targetScore: 54600,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.318,
    modifiers: []
  },
  {
    levelNumber: 547,
    name: 'Stage 547',
    targetScore: 54700,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.319,
    modifiers: []
  },
  {
    levelNumber: 548,
    name: 'Stage 548',
    targetScore: 54800,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.319,
    modifiers: []
  },
  {
    levelNumber: 549,
    name: 'Stage 549',
    targetScore: 54900,
    timeLimit: 50,
    gridSize: 9,
    colorSimilarity: 0.320,
    modifiers: []
  },
  {
    levelNumber: 550,
    name: 'Stage 550',
    targetScore: 55000,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.320,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 551,
    name: 'Stage 551',
    targetScore: 55100,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.320,
    modifiers: []
  },
  {
    levelNumber: 552,
    name: 'Stage 552',
    targetScore: 55200,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.321,
    modifiers: []
  },
  {
    levelNumber: 553,
    name: 'Stage 553',
    targetScore: 55300,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.321,
    modifiers: []
  },
  {
    levelNumber: 554,
    name: 'Stage 554',
    targetScore: 55400,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.322,
    modifiers: []
  },
  {
    levelNumber: 555,
    name: 'Stage 555',
    targetScore: 55500,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.322,
    modifiers: []
  },
  {
    levelNumber: 556,
    name: 'Stage 556',
    targetScore: 55600,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.322,
    modifiers: []
  },
  {
    levelNumber: 557,
    name: 'Stage 557',
    targetScore: 55700,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.323,
    modifiers: []
  },
  {
    levelNumber: 558,
    name: 'Stage 558',
    targetScore: 55800,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.323,
    modifiers: []
  },
  {
    levelNumber: 559,
    name: 'Stage 559',
    targetScore: 55900,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.324,
    modifiers: []
  },
  {
    levelNumber: 560,
    name: 'Stage 560',
    targetScore: 56000,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.324,
    modifiers: []
  },
  {
    levelNumber: 561,
    name: 'Stage 561',
    targetScore: 56100,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.324,
    modifiers: []
  },
  {
    levelNumber: 562,
    name: 'Stage 562',
    targetScore: 56200,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.325,
    modifiers: []
  },
  {
    levelNumber: 563,
    name: 'Stage 563',
    targetScore: 56300,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.325,
    modifiers: []
  },
  {
    levelNumber: 564,
    name: 'Stage 564',
    targetScore: 56400,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.326,
    modifiers: []
  },
  {
    levelNumber: 565,
    name: 'Stage 565',
    targetScore: 56500,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.326,
    modifiers: []
  },
  {
    levelNumber: 566,
    name: 'Stage 566',
    targetScore: 56600,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.326,
    modifiers: []
  },
  {
    levelNumber: 567,
    name: 'Stage 567',
    targetScore: 56700,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.327,
    modifiers: []
  },
  {
    levelNumber: 568,
    name: 'Stage 568',
    targetScore: 56800,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.327,
    modifiers: []
  },
  {
    levelNumber: 569,
    name: 'Stage 569',
    targetScore: 56900,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.328,
    modifiers: []
  },
  {
    levelNumber: 570,
    name: 'Stage 570',
    targetScore: 57000,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.328,
    modifiers: []
  },
  {
    levelNumber: 571,
    name: 'Stage 571',
    targetScore: 57100,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.328,
    modifiers: []
  },
  {
    levelNumber: 572,
    name: 'Stage 572',
    targetScore: 57200,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.329,
    modifiers: []
  },
  {
    levelNumber: 573,
    name: 'Stage 573',
    targetScore: 57300,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.329,
    modifiers: []
  },
  {
    levelNumber: 574,
    name: 'Stage 574',
    targetScore: 57400,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.330,
    modifiers: []
  },
  {
    levelNumber: 575,
    name: 'Stage 575',
    targetScore: 57500,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.330,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 576,
    name: 'Stage 576',
    targetScore: 57600,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.330,
    modifiers: []
  },
  {
    levelNumber: 577,
    name: 'Stage 577',
    targetScore: 57700,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.331,
    modifiers: []
  },
  {
    levelNumber: 578,
    name: 'Stage 578',
    targetScore: 57800,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.331,
    modifiers: []
  },
  {
    levelNumber: 579,
    name: 'Stage 579',
    targetScore: 57900,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.332,
    modifiers: []
  },
  {
    levelNumber: 580,
    name: 'Stage 580',
    targetScore: 58000,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.332,
    modifiers: []
  },
  {
    levelNumber: 581,
    name: 'Stage 581',
    targetScore: 58100,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.332,
    modifiers: []
  },
  {
    levelNumber: 582,
    name: 'Stage 582',
    targetScore: 58200,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.333,
    modifiers: []
  },
  {
    levelNumber: 583,
    name: 'Stage 583',
    targetScore: 58300,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.333,
    modifiers: []
  },
  {
    levelNumber: 584,
    name: 'Stage 584',
    targetScore: 58400,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.334,
    modifiers: []
  },
  {
    levelNumber: 585,
    name: 'Stage 585',
    targetScore: 58500,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.334,
    modifiers: []
  },
  {
    levelNumber: 586,
    name: 'Stage 586',
    targetScore: 58600,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.334,
    modifiers: []
  },
  {
    levelNumber: 587,
    name: 'Stage 587',
    targetScore: 58700,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.335,
    modifiers: []
  },
  {
    levelNumber: 588,
    name: 'Stage 588',
    targetScore: 58800,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.335,
    modifiers: []
  },
  {
    levelNumber: 589,
    name: 'Stage 589',
    targetScore: 58900,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.336,
    modifiers: []
  },
  {
    levelNumber: 590,
    name: 'Stage 590',
    targetScore: 59000,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.336,
    modifiers: []
  },
  {
    levelNumber: 591,
    name: 'Stage 591',
    targetScore: 59100,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.336,
    modifiers: []
  },
  {
    levelNumber: 592,
    name: 'Stage 592',
    targetScore: 59200,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.337,
    modifiers: []
  },
  {
    levelNumber: 593,
    name: 'Stage 593',
    targetScore: 59300,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.337,
    modifiers: []
  },
  {
    levelNumber: 594,
    name: 'Stage 594',
    targetScore: 59400,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.338,
    modifiers: []
  },
  {
    levelNumber: 595,
    name: 'Stage 595',
    targetScore: 59500,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.338,
    modifiers: []
  },
  {
    levelNumber: 596,
    name: 'Stage 596',
    targetScore: 59600,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.338,
    modifiers: []
  },
  {
    levelNumber: 597,
    name: 'Stage 597',
    targetScore: 59700,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.339,
    modifiers: []
  },
  {
    levelNumber: 598,
    name: 'Stage 598',
    targetScore: 59800,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.339,
    modifiers: []
  },
  {
    levelNumber: 599,
    name: 'Stage 599',
    targetScore: 59900,
    timeLimit: 49,
    gridSize: 9,
    colorSimilarity: 0.340,
    modifiers: []
  },
  {
    levelNumber: 600,
    name: 'Stage 600',
    targetScore: 60000,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.340,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 601,
    name: 'Stage 601',
    targetScore: 60100,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.340,
    modifiers: []
  },
  {
    levelNumber: 602,
    name: 'Stage 602',
    targetScore: 60200,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.341,
    modifiers: []
  },
  {
    levelNumber: 603,
    name: 'Stage 603',
    targetScore: 60300,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.341,
    modifiers: []
  },
  {
    levelNumber: 604,
    name: 'Stage 604',
    targetScore: 60400,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.342,
    modifiers: []
  },
  {
    levelNumber: 605,
    name: 'Stage 605',
    targetScore: 60500,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.342,
    modifiers: []
  },
  {
    levelNumber: 606,
    name: 'Stage 606',
    targetScore: 60600,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.342,
    modifiers: []
  },
  {
    levelNumber: 607,
    name: 'Stage 607',
    targetScore: 60700,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.343,
    modifiers: []
  },
  {
    levelNumber: 608,
    name: 'Stage 608',
    targetScore: 60800,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.343,
    modifiers: []
  },
  {
    levelNumber: 609,
    name: 'Stage 609',
    targetScore: 60900,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.344,
    modifiers: []
  },
  {
    levelNumber: 610,
    name: 'Stage 610',
    targetScore: 61000,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.344,
    modifiers: []
  },
  {
    levelNumber: 611,
    name: 'Stage 611',
    targetScore: 61100,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.344,
    modifiers: []
  },
  {
    levelNumber: 612,
    name: 'Stage 612',
    targetScore: 61200,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.345,
    modifiers: []
  },
  {
    levelNumber: 613,
    name: 'Stage 613',
    targetScore: 61300,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.345,
    modifiers: []
  },
  {
    levelNumber: 614,
    name: 'Stage 614',
    targetScore: 61400,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.346,
    modifiers: []
  },
  {
    levelNumber: 615,
    name: 'Stage 615',
    targetScore: 61500,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.346,
    modifiers: []
  },
  {
    levelNumber: 616,
    name: 'Stage 616',
    targetScore: 61600,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.346,
    modifiers: []
  },
  {
    levelNumber: 617,
    name: 'Stage 617',
    targetScore: 61700,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.347,
    modifiers: []
  },
  {
    levelNumber: 618,
    name: 'Stage 618',
    targetScore: 61800,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.347,
    modifiers: []
  },
  {
    levelNumber: 619,
    name: 'Stage 619',
    targetScore: 61900,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.348,
    modifiers: []
  },
  {
    levelNumber: 620,
    name: 'Stage 620',
    targetScore: 62000,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.348,
    modifiers: []
  },
  {
    levelNumber: 621,
    name: 'Stage 621',
    targetScore: 62100,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.348,
    modifiers: []
  },
  {
    levelNumber: 622,
    name: 'Stage 622',
    targetScore: 62200,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.349,
    modifiers: []
  },
  {
    levelNumber: 623,
    name: 'Stage 623',
    targetScore: 62300,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.349,
    modifiers: []
  },
  {
    levelNumber: 624,
    name: 'Stage 624',
    targetScore: 62400,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.350,
    modifiers: []
  },
  {
    levelNumber: 625,
    name: 'Stage 625',
    targetScore: 62500,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.350,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 626,
    name: 'Stage 626',
    targetScore: 62600,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.350,
    modifiers: []
  },
  {
    levelNumber: 627,
    name: 'Stage 627',
    targetScore: 62700,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.351,
    modifiers: []
  },
  {
    levelNumber: 628,
    name: 'Stage 628',
    targetScore: 62800,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.351,
    modifiers: []
  },
  {
    levelNumber: 629,
    name: 'Stage 629',
    targetScore: 62900,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.352,
    modifiers: []
  },
  {
    levelNumber: 630,
    name: 'Stage 630',
    targetScore: 63000,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.352,
    modifiers: []
  },
  {
    levelNumber: 631,
    name: 'Stage 631',
    targetScore: 63100,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.352,
    modifiers: []
  },
  {
    levelNumber: 632,
    name: 'Stage 632',
    targetScore: 63200,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.353,
    modifiers: []
  },
  {
    levelNumber: 633,
    name: 'Stage 633',
    targetScore: 63300,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.353,
    modifiers: []
  },
  {
    levelNumber: 634,
    name: 'Stage 634',
    targetScore: 63400,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.354,
    modifiers: []
  },
  {
    levelNumber: 635,
    name: 'Stage 635',
    targetScore: 63500,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.354,
    modifiers: []
  },
  {
    levelNumber: 636,
    name: 'Stage 636',
    targetScore: 63600,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.354,
    modifiers: []
  },
  {
    levelNumber: 637,
    name: 'Stage 637',
    targetScore: 63700,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.355,
    modifiers: []
  },
  {
    levelNumber: 638,
    name: 'Stage 638',
    targetScore: 63800,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.355,
    modifiers: []
  },
  {
    levelNumber: 639,
    name: 'Stage 639',
    targetScore: 63900,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.356,
    modifiers: []
  },
  {
    levelNumber: 640,
    name: 'Stage 640',
    targetScore: 64000,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.356,
    modifiers: []
  },
  {
    levelNumber: 641,
    name: 'Stage 641',
    targetScore: 64100,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.356,
    modifiers: []
  },
  {
    levelNumber: 642,
    name: 'Stage 642',
    targetScore: 64200,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.357,
    modifiers: []
  },
  {
    levelNumber: 643,
    name: 'Stage 643',
    targetScore: 64300,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.357,
    modifiers: []
  },
  {
    levelNumber: 644,
    name: 'Stage 644',
    targetScore: 64400,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.358,
    modifiers: []
  },
  {
    levelNumber: 645,
    name: 'Stage 645',
    targetScore: 64500,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.358,
    modifiers: []
  },
  {
    levelNumber: 646,
    name: 'Stage 646',
    targetScore: 64600,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.358,
    modifiers: []
  },
  {
    levelNumber: 647,
    name: 'Stage 647',
    targetScore: 64700,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.359,
    modifiers: []
  },
  {
    levelNumber: 648,
    name: 'Stage 648',
    targetScore: 64800,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.359,
    modifiers: []
  },
  {
    levelNumber: 649,
    name: 'Stage 649',
    targetScore: 64900,
    timeLimit: 48,
    gridSize: 9,
    colorSimilarity: 0.360,
    modifiers: []
  },
  {
    levelNumber: 650,
    name: 'Stage 650',
    targetScore: 65000,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.360,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 651,
    name: 'Stage 651',
    targetScore: 65100,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.360,
    modifiers: []
  },
  {
    levelNumber: 652,
    name: 'Stage 652',
    targetScore: 65200,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.361,
    modifiers: []
  },
  {
    levelNumber: 653,
    name: 'Stage 653',
    targetScore: 65300,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.361,
    modifiers: []
  },
  {
    levelNumber: 654,
    name: 'Stage 654',
    targetScore: 65400,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.362,
    modifiers: []
  },
  {
    levelNumber: 655,
    name: 'Stage 655',
    targetScore: 65500,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.362,
    modifiers: []
  },
  {
    levelNumber: 656,
    name: 'Stage 656',
    targetScore: 65600,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.362,
    modifiers: []
  },
  {
    levelNumber: 657,
    name: 'Stage 657',
    targetScore: 65700,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.363,
    modifiers: []
  },
  {
    levelNumber: 658,
    name: 'Stage 658',
    targetScore: 65800,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.363,
    modifiers: []
  },
  {
    levelNumber: 659,
    name: 'Stage 659',
    targetScore: 65900,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.364,
    modifiers: []
  },
  {
    levelNumber: 660,
    name: 'Stage 660',
    targetScore: 66000,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.364,
    modifiers: []
  },
  {
    levelNumber: 661,
    name: 'Stage 661',
    targetScore: 66100,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.364,
    modifiers: []
  },
  {
    levelNumber: 662,
    name: 'Stage 662',
    targetScore: 66200,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.365,
    modifiers: []
  },
  {
    levelNumber: 663,
    name: 'Stage 663',
    targetScore: 66300,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.365,
    modifiers: []
  },
  {
    levelNumber: 664,
    name: 'Stage 664',
    targetScore: 66400,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.366,
    modifiers: []
  },
  {
    levelNumber: 665,
    name: 'Stage 665',
    targetScore: 66500,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.366,
    modifiers: []
  },
  {
    levelNumber: 666,
    name: 'Stage 666',
    targetScore: 66600,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.366,
    modifiers: []
  },
  {
    levelNumber: 667,
    name: 'Stage 667',
    targetScore: 66700,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.367,
    modifiers: []
  },
  {
    levelNumber: 668,
    name: 'Stage 668',
    targetScore: 66800,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.367,
    modifiers: []
  },
  {
    levelNumber: 669,
    name: 'Stage 669',
    targetScore: 66900,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.368,
    modifiers: []
  },
  {
    levelNumber: 670,
    name: 'Stage 670',
    targetScore: 67000,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.368,
    modifiers: []
  },
  {
    levelNumber: 671,
    name: 'Stage 671',
    targetScore: 67100,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.368,
    modifiers: []
  },
  {
    levelNumber: 672,
    name: 'Stage 672',
    targetScore: 67200,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.369,
    modifiers: []
  },
  {
    levelNumber: 673,
    name: 'Stage 673',
    targetScore: 67300,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.369,
    modifiers: []
  },
  {
    levelNumber: 674,
    name: 'Stage 674',
    targetScore: 67400,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.370,
    modifiers: []
  },
  {
    levelNumber: 675,
    name: 'Stage 675',
    targetScore: 67500,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.370,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 676,
    name: 'Stage 676',
    targetScore: 67600,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.370,
    modifiers: []
  },
  {
    levelNumber: 677,
    name: 'Stage 677',
    targetScore: 67700,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.371,
    modifiers: []
  },
  {
    levelNumber: 678,
    name: 'Stage 678',
    targetScore: 67800,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.371,
    modifiers: []
  },
  {
    levelNumber: 679,
    name: 'Stage 679',
    targetScore: 67900,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.372,
    modifiers: []
  },
  {
    levelNumber: 680,
    name: 'Stage 680',
    targetScore: 68000,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.372,
    modifiers: []
  },
  {
    levelNumber: 681,
    name: 'Stage 681',
    targetScore: 68100,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.372,
    modifiers: []
  },
  {
    levelNumber: 682,
    name: 'Stage 682',
    targetScore: 68200,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.373,
    modifiers: []
  },
  {
    levelNumber: 683,
    name: 'Stage 683',
    targetScore: 68300,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.373,
    modifiers: []
  },
  {
    levelNumber: 684,
    name: 'Stage 684',
    targetScore: 68400,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.374,
    modifiers: []
  },
  {
    levelNumber: 685,
    name: 'Stage 685',
    targetScore: 68500,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.374,
    modifiers: []
  },
  {
    levelNumber: 686,
    name: 'Stage 686',
    targetScore: 68600,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.374,
    modifiers: []
  },
  {
    levelNumber: 687,
    name: 'Stage 687',
    targetScore: 68700,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.375,
    modifiers: []
  },
  {
    levelNumber: 688,
    name: 'Stage 688',
    targetScore: 68800,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.375,
    modifiers: []
  },
  {
    levelNumber: 689,
    name: 'Stage 689',
    targetScore: 68900,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.376,
    modifiers: []
  },
  {
    levelNumber: 690,
    name: 'Stage 690',
    targetScore: 69000,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.376,
    modifiers: []
  },
  {
    levelNumber: 691,
    name: 'Stage 691',
    targetScore: 69100,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.376,
    modifiers: []
  },
  {
    levelNumber: 692,
    name: 'Stage 692',
    targetScore: 69200,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.377,
    modifiers: []
  },
  {
    levelNumber: 693,
    name: 'Stage 693',
    targetScore: 69300,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.377,
    modifiers: []
  },
  {
    levelNumber: 694,
    name: 'Stage 694',
    targetScore: 69400,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.378,
    modifiers: []
  },
  {
    levelNumber: 695,
    name: 'Stage 695',
    targetScore: 69500,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.378,
    modifiers: []
  },
  {
    levelNumber: 696,
    name: 'Stage 696',
    targetScore: 69600,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.378,
    modifiers: []
  },
  {
    levelNumber: 697,
    name: 'Stage 697',
    targetScore: 69700,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.379,
    modifiers: []
  },
  {
    levelNumber: 698,
    name: 'Stage 698',
    targetScore: 69800,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.379,
    modifiers: []
  },
  {
    levelNumber: 699,
    name: 'Stage 699',
    targetScore: 69900,
    timeLimit: 47,
    gridSize: 9,
    colorSimilarity: 0.380,
    modifiers: []
  },
  {
    levelNumber: 700,
    name: 'Stage 700',
    targetScore: 70000,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.380,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 701,
    name: 'Stage 701',
    targetScore: 70100,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.380,
    modifiers: []
  },
  {
    levelNumber: 702,
    name: 'Stage 702',
    targetScore: 70200,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.381,
    modifiers: []
  },
  {
    levelNumber: 703,
    name: 'Stage 703',
    targetScore: 70300,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.381,
    modifiers: []
  },
  {
    levelNumber: 704,
    name: 'Stage 704',
    targetScore: 70400,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.382,
    modifiers: []
  },
  {
    levelNumber: 705,
    name: 'Stage 705',
    targetScore: 70500,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.382,
    modifiers: []
  },
  {
    levelNumber: 706,
    name: 'Stage 706',
    targetScore: 70600,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.382,
    modifiers: []
  },
  {
    levelNumber: 707,
    name: 'Stage 707',
    targetScore: 70700,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.383,
    modifiers: []
  },
  {
    levelNumber: 708,
    name: 'Stage 708',
    targetScore: 70800,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.383,
    modifiers: []
  },
  {
    levelNumber: 709,
    name: 'Stage 709',
    targetScore: 70900,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.384,
    modifiers: []
  },
  {
    levelNumber: 710,
    name: 'Stage 710',
    targetScore: 71000,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.384,
    modifiers: []
  },
  {
    levelNumber: 711,
    name: 'Stage 711',
    targetScore: 71100,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.384,
    modifiers: []
  },
  {
    levelNumber: 712,
    name: 'Stage 712',
    targetScore: 71200,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.385,
    modifiers: []
  },
  {
    levelNumber: 713,
    name: 'Stage 713',
    targetScore: 71300,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.385,
    modifiers: []
  },
  {
    levelNumber: 714,
    name: 'Stage 714',
    targetScore: 71400,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.386,
    modifiers: []
  },
  {
    levelNumber: 715,
    name: 'Stage 715',
    targetScore: 71500,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.386,
    modifiers: []
  },
  {
    levelNumber: 716,
    name: 'Stage 716',
    targetScore: 71600,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.386,
    modifiers: []
  },
  {
    levelNumber: 717,
    name: 'Stage 717',
    targetScore: 71700,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.387,
    modifiers: []
  },
  {
    levelNumber: 718,
    name: 'Stage 718',
    targetScore: 71800,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.387,
    modifiers: []
  },
  {
    levelNumber: 719,
    name: 'Stage 719',
    targetScore: 71900,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.388,
    modifiers: []
  },
  {
    levelNumber: 720,
    name: 'Stage 720',
    targetScore: 72000,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.388,
    modifiers: []
  },
  {
    levelNumber: 721,
    name: 'Stage 721',
    targetScore: 72100,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.388,
    modifiers: []
  },
  {
    levelNumber: 722,
    name: 'Stage 722',
    targetScore: 72200,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.389,
    modifiers: []
  },
  {
    levelNumber: 723,
    name: 'Stage 723',
    targetScore: 72300,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.389,
    modifiers: []
  },
  {
    levelNumber: 724,
    name: 'Stage 724',
    targetScore: 72400,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.390,
    modifiers: []
  },
  {
    levelNumber: 725,
    name: 'Stage 725',
    targetScore: 72500,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.390,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 726,
    name: 'Stage 726',
    targetScore: 72600,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.390,
    modifiers: []
  },
  {
    levelNumber: 727,
    name: 'Stage 727',
    targetScore: 72700,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.391,
    modifiers: []
  },
  {
    levelNumber: 728,
    name: 'Stage 728',
    targetScore: 72800,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.391,
    modifiers: []
  },
  {
    levelNumber: 729,
    name: 'Stage 729',
    targetScore: 72900,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.392,
    modifiers: []
  },
  {
    levelNumber: 730,
    name: 'Stage 730',
    targetScore: 73000,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.392,
    modifiers: []
  },
  {
    levelNumber: 731,
    name: 'Stage 731',
    targetScore: 73100,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.392,
    modifiers: []
  },
  {
    levelNumber: 732,
    name: 'Stage 732',
    targetScore: 73200,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.393,
    modifiers: []
  },
  {
    levelNumber: 733,
    name: 'Stage 733',
    targetScore: 73300,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.393,
    modifiers: []
  },
  {
    levelNumber: 734,
    name: 'Stage 734',
    targetScore: 73400,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.394,
    modifiers: []
  },
  {
    levelNumber: 735,
    name: 'Stage 735',
    targetScore: 73500,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.394,
    modifiers: []
  },
  {
    levelNumber: 736,
    name: 'Stage 736',
    targetScore: 73600,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.394,
    modifiers: []
  },
  {
    levelNumber: 737,
    name: 'Stage 737',
    targetScore: 73700,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.395,
    modifiers: []
  },
  {
    levelNumber: 738,
    name: 'Stage 738',
    targetScore: 73800,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.395,
    modifiers: []
  },
  {
    levelNumber: 739,
    name: 'Stage 739',
    targetScore: 73900,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.396,
    modifiers: []
  },
  {
    levelNumber: 740,
    name: 'Stage 740',
    targetScore: 74000,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.396,
    modifiers: []
  },
  {
    levelNumber: 741,
    name: 'Stage 741',
    targetScore: 74100,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.396,
    modifiers: []
  },
  {
    levelNumber: 742,
    name: 'Stage 742',
    targetScore: 74200,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.397,
    modifiers: []
  },
  {
    levelNumber: 743,
    name: 'Stage 743',
    targetScore: 74300,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.397,
    modifiers: []
  },
  {
    levelNumber: 744,
    name: 'Stage 744',
    targetScore: 74400,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.398,
    modifiers: []
  },
  {
    levelNumber: 745,
    name: 'Stage 745',
    targetScore: 74500,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.398,
    modifiers: []
  },
  {
    levelNumber: 746,
    name: 'Stage 746',
    targetScore: 74600,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.398,
    modifiers: []
  },
  {
    levelNumber: 747,
    name: 'Stage 747',
    targetScore: 74700,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.399,
    modifiers: []
  },
  {
    levelNumber: 748,
    name: 'Stage 748',
    targetScore: 74800,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.399,
    modifiers: []
  },
  {
    levelNumber: 749,
    name: 'Stage 749',
    targetScore: 74900,
    timeLimit: 46,
    gridSize: 9,
    colorSimilarity: 0.400,
    modifiers: []
  },
  {
    levelNumber: 750,
    name: 'Stage 750',
    targetScore: 75000,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.400,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 751,
    name: 'Stage 751',
    targetScore: 75100,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.400,
    modifiers: []
  },
  {
    levelNumber: 752,
    name: 'Stage 752',
    targetScore: 75200,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.401,
    modifiers: []
  },
  {
    levelNumber: 753,
    name: 'Stage 753',
    targetScore: 75300,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.401,
    modifiers: []
  },
  {
    levelNumber: 754,
    name: 'Stage 754',
    targetScore: 75400,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.402,
    modifiers: []
  },
  {
    levelNumber: 755,
    name: 'Stage 755',
    targetScore: 75500,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.402,
    modifiers: []
  },
  {
    levelNumber: 756,
    name: 'Stage 756',
    targetScore: 75600,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.402,
    modifiers: []
  },
  {
    levelNumber: 757,
    name: 'Stage 757',
    targetScore: 75700,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.403,
    modifiers: []
  },
  {
    levelNumber: 758,
    name: 'Stage 758',
    targetScore: 75800,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.403,
    modifiers: []
  },
  {
    levelNumber: 759,
    name: 'Stage 759',
    targetScore: 75900,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.404,
    modifiers: []
  },
  {
    levelNumber: 760,
    name: 'Stage 760',
    targetScore: 76000,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.404,
    modifiers: []
  },
  {
    levelNumber: 761,
    name: 'Stage 761',
    targetScore: 76100,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.404,
    modifiers: []
  },
  {
    levelNumber: 762,
    name: 'Stage 762',
    targetScore: 76200,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.405,
    modifiers: []
  },
  {
    levelNumber: 763,
    name: 'Stage 763',
    targetScore: 76300,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.405,
    modifiers: []
  },
  {
    levelNumber: 764,
    name: 'Stage 764',
    targetScore: 76400,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.406,
    modifiers: []
  },
  {
    levelNumber: 765,
    name: 'Stage 765',
    targetScore: 76500,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.406,
    modifiers: []
  },
  {
    levelNumber: 766,
    name: 'Stage 766',
    targetScore: 76600,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.406,
    modifiers: []
  },
  {
    levelNumber: 767,
    name: 'Stage 767',
    targetScore: 76700,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.407,
    modifiers: []
  },
  {
    levelNumber: 768,
    name: 'Stage 768',
    targetScore: 76800,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.407,
    modifiers: []
  },
  {
    levelNumber: 769,
    name: 'Stage 769',
    targetScore: 76900,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.408,
    modifiers: []
  },
  {
    levelNumber: 770,
    name: 'Stage 770',
    targetScore: 77000,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.408,
    modifiers: []
  },
  {
    levelNumber: 771,
    name: 'Stage 771',
    targetScore: 77100,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.408,
    modifiers: []
  },
  {
    levelNumber: 772,
    name: 'Stage 772',
    targetScore: 77200,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.409,
    modifiers: []
  },
  {
    levelNumber: 773,
    name: 'Stage 773',
    targetScore: 77300,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.409,
    modifiers: []
  },
  {
    levelNumber: 774,
    name: 'Stage 774',
    targetScore: 77400,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.410,
    modifiers: []
  },
  {
    levelNumber: 775,
    name: 'Stage 775',
    targetScore: 77500,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.410,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 776,
    name: 'Stage 776',
    targetScore: 77600,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.410,
    modifiers: []
  },
  {
    levelNumber: 777,
    name: 'Stage 777',
    targetScore: 77700,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.411,
    modifiers: []
  },
  {
    levelNumber: 778,
    name: 'Stage 778',
    targetScore: 77800,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.411,
    modifiers: []
  },
  {
    levelNumber: 779,
    name: 'Stage 779',
    targetScore: 77900,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.412,
    modifiers: []
  },
  {
    levelNumber: 780,
    name: 'Stage 780',
    targetScore: 78000,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.412,
    modifiers: []
  },
  {
    levelNumber: 781,
    name: 'Stage 781',
    targetScore: 78100,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.412,
    modifiers: []
  },
  {
    levelNumber: 782,
    name: 'Stage 782',
    targetScore: 78200,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.413,
    modifiers: []
  },
  {
    levelNumber: 783,
    name: 'Stage 783',
    targetScore: 78300,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.413,
    modifiers: []
  },
  {
    levelNumber: 784,
    name: 'Stage 784',
    targetScore: 78400,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.414,
    modifiers: []
  },
  {
    levelNumber: 785,
    name: 'Stage 785',
    targetScore: 78500,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.414,
    modifiers: []
  },
  {
    levelNumber: 786,
    name: 'Stage 786',
    targetScore: 78600,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.414,
    modifiers: []
  },
  {
    levelNumber: 787,
    name: 'Stage 787',
    targetScore: 78700,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.415,
    modifiers: []
  },
  {
    levelNumber: 788,
    name: 'Stage 788',
    targetScore: 78800,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.415,
    modifiers: []
  },
  {
    levelNumber: 789,
    name: 'Stage 789',
    targetScore: 78900,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.416,
    modifiers: []
  },
  {
    levelNumber: 790,
    name: 'Stage 790',
    targetScore: 79000,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.416,
    modifiers: []
  },
  {
    levelNumber: 791,
    name: 'Stage 791',
    targetScore: 79100,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.416,
    modifiers: []
  },
  {
    levelNumber: 792,
    name: 'Stage 792',
    targetScore: 79200,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.417,
    modifiers: []
  },
  {
    levelNumber: 793,
    name: 'Stage 793',
    targetScore: 79300,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.417,
    modifiers: []
  },
  {
    levelNumber: 794,
    name: 'Stage 794',
    targetScore: 79400,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.418,
    modifiers: []
  },
  {
    levelNumber: 795,
    name: 'Stage 795',
    targetScore: 79500,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.418,
    modifiers: []
  },
  {
    levelNumber: 796,
    name: 'Stage 796',
    targetScore: 79600,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.418,
    modifiers: []
  },
  {
    levelNumber: 797,
    name: 'Stage 797',
    targetScore: 79700,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.419,
    modifiers: []
  },
  {
    levelNumber: 798,
    name: 'Stage 798',
    targetScore: 79800,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.419,
    modifiers: []
  },
  {
    levelNumber: 799,
    name: 'Stage 799',
    targetScore: 79900,
    timeLimit: 45,
    gridSize: 9,
    colorSimilarity: 0.420,
    modifiers: []
  },
  {
    levelNumber: 800,
    name: 'Stage 800',
    targetScore: 80000,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.420,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 801,
    name: 'Stage 801',
    targetScore: 80100,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.420,
    modifiers: []
  },
  {
    levelNumber: 802,
    name: 'Stage 802',
    targetScore: 80200,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.421,
    modifiers: []
  },
  {
    levelNumber: 803,
    name: 'Stage 803',
    targetScore: 80300,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.421,
    modifiers: []
  },
  {
    levelNumber: 804,
    name: 'Stage 804',
    targetScore: 80400,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.422,
    modifiers: []
  },
  {
    levelNumber: 805,
    name: 'Stage 805',
    targetScore: 80500,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.422,
    modifiers: []
  },
  {
    levelNumber: 806,
    name: 'Stage 806',
    targetScore: 80600,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.422,
    modifiers: []
  },
  {
    levelNumber: 807,
    name: 'Stage 807',
    targetScore: 80700,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.423,
    modifiers: []
  },
  {
    levelNumber: 808,
    name: 'Stage 808',
    targetScore: 80800,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.423,
    modifiers: []
  },
  {
    levelNumber: 809,
    name: 'Stage 809',
    targetScore: 80900,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.424,
    modifiers: []
  },
  {
    levelNumber: 810,
    name: 'Stage 810',
    targetScore: 81000,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.424,
    modifiers: []
  },
  {
    levelNumber: 811,
    name: 'Stage 811',
    targetScore: 81100,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.424,
    modifiers: []
  },
  {
    levelNumber: 812,
    name: 'Stage 812',
    targetScore: 81200,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.425,
    modifiers: []
  },
  {
    levelNumber: 813,
    name: 'Stage 813',
    targetScore: 81300,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.425,
    modifiers: []
  },
  {
    levelNumber: 814,
    name: 'Stage 814',
    targetScore: 81400,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.426,
    modifiers: []
  },
  {
    levelNumber: 815,
    name: 'Stage 815',
    targetScore: 81500,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.426,
    modifiers: []
  },
  {
    levelNumber: 816,
    name: 'Stage 816',
    targetScore: 81600,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.426,
    modifiers: []
  },
  {
    levelNumber: 817,
    name: 'Stage 817',
    targetScore: 81700,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.427,
    modifiers: []
  },
  {
    levelNumber: 818,
    name: 'Stage 818',
    targetScore: 81800,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.427,
    modifiers: []
  },
  {
    levelNumber: 819,
    name: 'Stage 819',
    targetScore: 81900,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.428,
    modifiers: []
  },
  {
    levelNumber: 820,
    name: 'Stage 820',
    targetScore: 82000,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.428,
    modifiers: []
  },
  {
    levelNumber: 821,
    name: 'Stage 821',
    targetScore: 82100,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.428,
    modifiers: []
  },
  {
    levelNumber: 822,
    name: 'Stage 822',
    targetScore: 82200,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.429,
    modifiers: []
  },
  {
    levelNumber: 823,
    name: 'Stage 823',
    targetScore: 82300,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.429,
    modifiers: []
  },
  {
    levelNumber: 824,
    name: 'Stage 824',
    targetScore: 82400,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.430,
    modifiers: []
  },
  {
    levelNumber: 825,
    name: 'Stage 825',
    targetScore: 82500,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.430,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 826,
    name: 'Stage 826',
    targetScore: 82600,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.430,
    modifiers: []
  },
  {
    levelNumber: 827,
    name: 'Stage 827',
    targetScore: 82700,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.431,
    modifiers: []
  },
  {
    levelNumber: 828,
    name: 'Stage 828',
    targetScore: 82800,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.431,
    modifiers: []
  },
  {
    levelNumber: 829,
    name: 'Stage 829',
    targetScore: 82900,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.432,
    modifiers: []
  },
  {
    levelNumber: 830,
    name: 'Stage 830',
    targetScore: 83000,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.432,
    modifiers: []
  },
  {
    levelNumber: 831,
    name: 'Stage 831',
    targetScore: 83100,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.432,
    modifiers: []
  },
  {
    levelNumber: 832,
    name: 'Stage 832',
    targetScore: 83200,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.433,
    modifiers: []
  },
  {
    levelNumber: 833,
    name: 'Stage 833',
    targetScore: 83300,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.433,
    modifiers: []
  },
  {
    levelNumber: 834,
    name: 'Stage 834',
    targetScore: 83400,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.434,
    modifiers: []
  },
  {
    levelNumber: 835,
    name: 'Stage 835',
    targetScore: 83500,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.434,
    modifiers: []
  },
  {
    levelNumber: 836,
    name: 'Stage 836',
    targetScore: 83600,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.434,
    modifiers: []
  },
  {
    levelNumber: 837,
    name: 'Stage 837',
    targetScore: 83700,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.435,
    modifiers: []
  },
  {
    levelNumber: 838,
    name: 'Stage 838',
    targetScore: 83800,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.435,
    modifiers: []
  },
  {
    levelNumber: 839,
    name: 'Stage 839',
    targetScore: 83900,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.436,
    modifiers: []
  },
  {
    levelNumber: 840,
    name: 'Stage 840',
    targetScore: 84000,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.436,
    modifiers: []
  },
  {
    levelNumber: 841,
    name: 'Stage 841',
    targetScore: 84100,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.436,
    modifiers: []
  },
  {
    levelNumber: 842,
    name: 'Stage 842',
    targetScore: 84200,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.437,
    modifiers: []
  },
  {
    levelNumber: 843,
    name: 'Stage 843',
    targetScore: 84300,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.437,
    modifiers: []
  },
  {
    levelNumber: 844,
    name: 'Stage 844',
    targetScore: 84400,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.438,
    modifiers: []
  },
  {
    levelNumber: 845,
    name: 'Stage 845',
    targetScore: 84500,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.438,
    modifiers: []
  },
  {
    levelNumber: 846,
    name: 'Stage 846',
    targetScore: 84600,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.438,
    modifiers: []
  },
  {
    levelNumber: 847,
    name: 'Stage 847',
    targetScore: 84700,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.439,
    modifiers: []
  },
  {
    levelNumber: 848,
    name: 'Stage 848',
    targetScore: 84800,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.439,
    modifiers: []
  },
  {
    levelNumber: 849,
    name: 'Stage 849',
    targetScore: 84900,
    timeLimit: 44,
    gridSize: 9,
    colorSimilarity: 0.440,
    modifiers: []
  },
  {
    levelNumber: 850,
    name: 'Stage 850',
    targetScore: 85000,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.440,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 851,
    name: 'Stage 851',
    targetScore: 85100,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.440,
    modifiers: []
  },
  {
    levelNumber: 852,
    name: 'Stage 852',
    targetScore: 85200,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.441,
    modifiers: []
  },
  {
    levelNumber: 853,
    name: 'Stage 853',
    targetScore: 85300,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.441,
    modifiers: []
  },
  {
    levelNumber: 854,
    name: 'Stage 854',
    targetScore: 85400,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.442,
    modifiers: []
  },
  {
    levelNumber: 855,
    name: 'Stage 855',
    targetScore: 85500,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.442,
    modifiers: []
  },
  {
    levelNumber: 856,
    name: 'Stage 856',
    targetScore: 85600,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.442,
    modifiers: []
  },
  {
    levelNumber: 857,
    name: 'Stage 857',
    targetScore: 85700,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.443,
    modifiers: []
  },
  {
    levelNumber: 858,
    name: 'Stage 858',
    targetScore: 85800,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.443,
    modifiers: []
  },
  {
    levelNumber: 859,
    name: 'Stage 859',
    targetScore: 85900,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.444,
    modifiers: []
  },
  {
    levelNumber: 860,
    name: 'Stage 860',
    targetScore: 86000,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.444,
    modifiers: []
  },
  {
    levelNumber: 861,
    name: 'Stage 861',
    targetScore: 86100,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.444,
    modifiers: []
  },
  {
    levelNumber: 862,
    name: 'Stage 862',
    targetScore: 86200,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.445,
    modifiers: []
  },
  {
    levelNumber: 863,
    name: 'Stage 863',
    targetScore: 86300,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.445,
    modifiers: []
  },
  {
    levelNumber: 864,
    name: 'Stage 864',
    targetScore: 86400,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.446,
    modifiers: []
  },
  {
    levelNumber: 865,
    name: 'Stage 865',
    targetScore: 86500,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.446,
    modifiers: []
  },
  {
    levelNumber: 866,
    name: 'Stage 866',
    targetScore: 86600,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.446,
    modifiers: []
  },
  {
    levelNumber: 867,
    name: 'Stage 867',
    targetScore: 86700,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.447,
    modifiers: []
  },
  {
    levelNumber: 868,
    name: 'Stage 868',
    targetScore: 86800,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.447,
    modifiers: []
  },
  {
    levelNumber: 869,
    name: 'Stage 869',
    targetScore: 86900,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.448,
    modifiers: []
  },
  {
    levelNumber: 870,
    name: 'Stage 870',
    targetScore: 87000,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.448,
    modifiers: []
  },
  {
    levelNumber: 871,
    name: 'Stage 871',
    targetScore: 87100,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.448,
    modifiers: []
  },
  {
    levelNumber: 872,
    name: 'Stage 872',
    targetScore: 87200,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.449,
    modifiers: []
  },
  {
    levelNumber: 873,
    name: 'Stage 873',
    targetScore: 87300,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.449,
    modifiers: []
  },
  {
    levelNumber: 874,
    name: 'Stage 874',
    targetScore: 87400,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.450,
    modifiers: []
  },
  {
    levelNumber: 875,
    name: 'Stage 875',
    targetScore: 87500,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.450,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 876,
    name: 'Stage 876',
    targetScore: 87600,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.450,
    modifiers: []
  },
  {
    levelNumber: 877,
    name: 'Stage 877',
    targetScore: 87700,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.451,
    modifiers: []
  },
  {
    levelNumber: 878,
    name: 'Stage 878',
    targetScore: 87800,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.451,
    modifiers: []
  },
  {
    levelNumber: 879,
    name: 'Stage 879',
    targetScore: 87900,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.452,
    modifiers: []
  },
  {
    levelNumber: 880,
    name: 'Stage 880',
    targetScore: 88000,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.452,
    modifiers: []
  },
  {
    levelNumber: 881,
    name: 'Stage 881',
    targetScore: 88100,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.452,
    modifiers: []
  },
  {
    levelNumber: 882,
    name: 'Stage 882',
    targetScore: 88200,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.453,
    modifiers: []
  },
  {
    levelNumber: 883,
    name: 'Stage 883',
    targetScore: 88300,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.453,
    modifiers: []
  },
  {
    levelNumber: 884,
    name: 'Stage 884',
    targetScore: 88400,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.454,
    modifiers: []
  },
  {
    levelNumber: 885,
    name: 'Stage 885',
    targetScore: 88500,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.454,
    modifiers: []
  },
  {
    levelNumber: 886,
    name: 'Stage 886',
    targetScore: 88600,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.454,
    modifiers: []
  },
  {
    levelNumber: 887,
    name: 'Stage 887',
    targetScore: 88700,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.455,
    modifiers: []
  },
  {
    levelNumber: 888,
    name: 'Stage 888',
    targetScore: 88800,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.455,
    modifiers: []
  },
  {
    levelNumber: 889,
    name: 'Stage 889',
    targetScore: 88900,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.456,
    modifiers: []
  },
  {
    levelNumber: 890,
    name: 'Stage 890',
    targetScore: 89000,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.456,
    modifiers: []
  },
  {
    levelNumber: 891,
    name: 'Stage 891',
    targetScore: 89100,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.456,
    modifiers: []
  },
  {
    levelNumber: 892,
    name: 'Stage 892',
    targetScore: 89200,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.457,
    modifiers: []
  },
  {
    levelNumber: 893,
    name: 'Stage 893',
    targetScore: 89300,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.457,
    modifiers: []
  },
  {
    levelNumber: 894,
    name: 'Stage 894',
    targetScore: 89400,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.458,
    modifiers: []
  },
  {
    levelNumber: 895,
    name: 'Stage 895',
    targetScore: 89500,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.458,
    modifiers: []
  },
  {
    levelNumber: 896,
    name: 'Stage 896',
    targetScore: 89600,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.458,
    modifiers: []
  },
  {
    levelNumber: 897,
    name: 'Stage 897',
    targetScore: 89700,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.459,
    modifiers: []
  },
  {
    levelNumber: 898,
    name: 'Stage 898',
    targetScore: 89800,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.459,
    modifiers: []
  },
  {
    levelNumber: 899,
    name: 'Stage 899',
    targetScore: 89900,
    timeLimit: 43,
    gridSize: 9,
    colorSimilarity: 0.460,
    modifiers: []
  },
  {
    levelNumber: 900,
    name: 'Stage 900',
    targetScore: 90000,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.460,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 901,
    name: 'Stage 901',
    targetScore: 90100,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.460,
    modifiers: []
  },
  {
    levelNumber: 902,
    name: 'Stage 902',
    targetScore: 90200,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.461,
    modifiers: []
  },
  {
    levelNumber: 903,
    name: 'Stage 903',
    targetScore: 90300,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.461,
    modifiers: []
  },
  {
    levelNumber: 904,
    name: 'Stage 904',
    targetScore: 90400,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.462,
    modifiers: []
  },
  {
    levelNumber: 905,
    name: 'Stage 905',
    targetScore: 90500,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.462,
    modifiers: []
  },
  {
    levelNumber: 906,
    name: 'Stage 906',
    targetScore: 90600,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.462,
    modifiers: []
  },
  {
    levelNumber: 907,
    name: 'Stage 907',
    targetScore: 90700,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.463,
    modifiers: []
  },
  {
    levelNumber: 908,
    name: 'Stage 908',
    targetScore: 90800,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.463,
    modifiers: []
  },
  {
    levelNumber: 909,
    name: 'Stage 909',
    targetScore: 90900,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.464,
    modifiers: []
  },
  {
    levelNumber: 910,
    name: 'Stage 910',
    targetScore: 91000,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.464,
    modifiers: []
  },
  {
    levelNumber: 911,
    name: 'Stage 911',
    targetScore: 91100,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.464,
    modifiers: []
  },
  {
    levelNumber: 912,
    name: 'Stage 912',
    targetScore: 91200,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.465,
    modifiers: []
  },
  {
    levelNumber: 913,
    name: 'Stage 913',
    targetScore: 91300,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.465,
    modifiers: []
  },
  {
    levelNumber: 914,
    name: 'Stage 914',
    targetScore: 91400,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.466,
    modifiers: []
  },
  {
    levelNumber: 915,
    name: 'Stage 915',
    targetScore: 91500,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.466,
    modifiers: []
  },
  {
    levelNumber: 916,
    name: 'Stage 916',
    targetScore: 91600,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.466,
    modifiers: []
  },
  {
    levelNumber: 917,
    name: 'Stage 917',
    targetScore: 91700,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.467,
    modifiers: []
  },
  {
    levelNumber: 918,
    name: 'Stage 918',
    targetScore: 91800,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.467,
    modifiers: []
  },
  {
    levelNumber: 919,
    name: 'Stage 919',
    targetScore: 91900,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.468,
    modifiers: []
  },
  {
    levelNumber: 920,
    name: 'Stage 920',
    targetScore: 92000,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.468,
    modifiers: []
  },
  {
    levelNumber: 921,
    name: 'Stage 921',
    targetScore: 92100,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.468,
    modifiers: []
  },
  {
    levelNumber: 922,
    name: 'Stage 922',
    targetScore: 92200,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.469,
    modifiers: []
  },
  {
    levelNumber: 923,
    name: 'Stage 923',
    targetScore: 92300,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.469,
    modifiers: []
  },
  {
    levelNumber: 924,
    name: 'Stage 924',
    targetScore: 92400,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.470,
    modifiers: []
  },
  {
    levelNumber: 925,
    name: 'Stage 925',
    targetScore: 92500,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.470,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 926,
    name: 'Stage 926',
    targetScore: 92600,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.470,
    modifiers: []
  },
  {
    levelNumber: 927,
    name: 'Stage 927',
    targetScore: 92700,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.471,
    modifiers: []
  },
  {
    levelNumber: 928,
    name: 'Stage 928',
    targetScore: 92800,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.471,
    modifiers: []
  },
  {
    levelNumber: 929,
    name: 'Stage 929',
    targetScore: 92900,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.472,
    modifiers: []
  },
  {
    levelNumber: 930,
    name: 'Stage 930',
    targetScore: 93000,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.472,
    modifiers: []
  },
  {
    levelNumber: 931,
    name: 'Stage 931',
    targetScore: 93100,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.472,
    modifiers: []
  },
  {
    levelNumber: 932,
    name: 'Stage 932',
    targetScore: 93200,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.473,
    modifiers: []
  },
  {
    levelNumber: 933,
    name: 'Stage 933',
    targetScore: 93300,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.473,
    modifiers: []
  },
  {
    levelNumber: 934,
    name: 'Stage 934',
    targetScore: 93400,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.474,
    modifiers: []
  },
  {
    levelNumber: 935,
    name: 'Stage 935',
    targetScore: 93500,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.474,
    modifiers: []
  },
  {
    levelNumber: 936,
    name: 'Stage 936',
    targetScore: 93600,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.474,
    modifiers: []
  },
  {
    levelNumber: 937,
    name: 'Stage 937',
    targetScore: 93700,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.475,
    modifiers: []
  },
  {
    levelNumber: 938,
    name: 'Stage 938',
    targetScore: 93800,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.475,
    modifiers: []
  },
  {
    levelNumber: 939,
    name: 'Stage 939',
    targetScore: 93900,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.476,
    modifiers: []
  },
  {
    levelNumber: 940,
    name: 'Stage 940',
    targetScore: 94000,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.476,
    modifiers: []
  },
  {
    levelNumber: 941,
    name: 'Stage 941',
    targetScore: 94100,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.476,
    modifiers: []
  },
  {
    levelNumber: 942,
    name: 'Stage 942',
    targetScore: 94200,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.477,
    modifiers: []
  },
  {
    levelNumber: 943,
    name: 'Stage 943',
    targetScore: 94300,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.477,
    modifiers: []
  },
  {
    levelNumber: 944,
    name: 'Stage 944',
    targetScore: 94400,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.478,
    modifiers: []
  },
  {
    levelNumber: 945,
    name: 'Stage 945',
    targetScore: 94500,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.478,
    modifiers: []
  },
  {
    levelNumber: 946,
    name: 'Stage 946',
    targetScore: 94600,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.478,
    modifiers: []
  },
  {
    levelNumber: 947,
    name: 'Stage 947',
    targetScore: 94700,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.479,
    modifiers: []
  },
  {
    levelNumber: 948,
    name: 'Stage 948',
    targetScore: 94800,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.479,
    modifiers: []
  },
  {
    levelNumber: 949,
    name: 'Stage 949',
    targetScore: 94900,
    timeLimit: 42,
    gridSize: 9,
    colorSimilarity: 0.480,
    modifiers: []
  },
  {
    levelNumber: 950,
    name: 'Stage 950',
    targetScore: 95000,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.480,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 951,
    name: 'Stage 951',
    targetScore: 95100,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.480,
    modifiers: []
  },
  {
    levelNumber: 952,
    name: 'Stage 952',
    targetScore: 95200,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.481,
    modifiers: []
  },
  {
    levelNumber: 953,
    name: 'Stage 953',
    targetScore: 95300,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.481,
    modifiers: []
  },
  {
    levelNumber: 954,
    name: 'Stage 954',
    targetScore: 95400,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.482,
    modifiers: []
  },
  {
    levelNumber: 955,
    name: 'Stage 955',
    targetScore: 95500,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.482,
    modifiers: []
  },
  {
    levelNumber: 956,
    name: 'Stage 956',
    targetScore: 95600,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.482,
    modifiers: []
  },
  {
    levelNumber: 957,
    name: 'Stage 957',
    targetScore: 95700,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.483,
    modifiers: []
  },
  {
    levelNumber: 958,
    name: 'Stage 958',
    targetScore: 95800,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.483,
    modifiers: []
  },
  {
    levelNumber: 959,
    name: 'Stage 959',
    targetScore: 95900,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.484,
    modifiers: []
  },
  {
    levelNumber: 960,
    name: 'Stage 960',
    targetScore: 96000,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.484,
    modifiers: []
  },
  {
    levelNumber: 961,
    name: 'Stage 961',
    targetScore: 96100,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.484,
    modifiers: []
  },
  {
    levelNumber: 962,
    name: 'Stage 962',
    targetScore: 96200,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.485,
    modifiers: []
  },
  {
    levelNumber: 963,
    name: 'Stage 963',
    targetScore: 96300,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.485,
    modifiers: []
  },
  {
    levelNumber: 964,
    name: 'Stage 964',
    targetScore: 96400,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.486,
    modifiers: []
  },
  {
    levelNumber: 965,
    name: 'Stage 965',
    targetScore: 96500,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.486,
    modifiers: []
  },
  {
    levelNumber: 966,
    name: 'Stage 966',
    targetScore: 96600,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.486,
    modifiers: []
  },
  {
    levelNumber: 967,
    name: 'Stage 967',
    targetScore: 96700,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.487,
    modifiers: []
  },
  {
    levelNumber: 968,
    name: 'Stage 968',
    targetScore: 96800,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.487,
    modifiers: []
  },
  {
    levelNumber: 969,
    name: 'Stage 969',
    targetScore: 96900,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.488,
    modifiers: []
  },
  {
    levelNumber: 970,
    name: 'Stage 970',
    targetScore: 97000,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.488,
    modifiers: []
  },
  {
    levelNumber: 971,
    name: 'Stage 971',
    targetScore: 97100,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.488,
    modifiers: []
  },
  {
    levelNumber: 972,
    name: 'Stage 972',
    targetScore: 97200,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.489,
    modifiers: []
  },
  {
    levelNumber: 973,
    name: 'Stage 973',
    targetScore: 97300,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.489,
    modifiers: []
  },
  {
    levelNumber: 974,
    name: 'Stage 974',
    targetScore: 97400,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.490,
    modifiers: []
  },
  {
    levelNumber: 975,
    name: 'Stage 975',
    targetScore: 97500,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.490,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 976,
    name: 'Stage 976',
    targetScore: 97600,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.490,
    modifiers: []
  },
  {
    levelNumber: 977,
    name: 'Stage 977',
    targetScore: 97700,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.491,
    modifiers: []
  },
  {
    levelNumber: 978,
    name: 'Stage 978',
    targetScore: 97800,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.491,
    modifiers: []
  },
  {
    levelNumber: 979,
    name: 'Stage 979',
    targetScore: 97900,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.492,
    modifiers: []
  },
  {
    levelNumber: 980,
    name: 'Stage 980',
    targetScore: 98000,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.492,
    modifiers: []
  },
  {
    levelNumber: 981,
    name: 'Stage 981',
    targetScore: 98100,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.492,
    modifiers: []
  },
  {
    levelNumber: 982,
    name: 'Stage 982',
    targetScore: 98200,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.493,
    modifiers: []
  },
  {
    levelNumber: 983,
    name: 'Stage 983',
    targetScore: 98300,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.493,
    modifiers: []
  },
  {
    levelNumber: 984,
    name: 'Stage 984',
    targetScore: 98400,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.494,
    modifiers: []
  },
  {
    levelNumber: 985,
    name: 'Stage 985',
    targetScore: 98500,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.494,
    modifiers: []
  },
  {
    levelNumber: 986,
    name: 'Stage 986',
    targetScore: 98600,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.494,
    modifiers: []
  },
  {
    levelNumber: 987,
    name: 'Stage 987',
    targetScore: 98700,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.495,
    modifiers: []
  },
  {
    levelNumber: 988,
    name: 'Stage 988',
    targetScore: 98800,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.495,
    modifiers: []
  },
  {
    levelNumber: 989,
    name: 'Stage 989',
    targetScore: 98900,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.496,
    modifiers: []
  },
  {
    levelNumber: 990,
    name: 'Stage 990',
    targetScore: 99000,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.496,
    modifiers: []
  },
  {
    levelNumber: 991,
    name: 'Stage 991',
    targetScore: 99100,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.496,
    modifiers: []
  },
  {
    levelNumber: 992,
    name: 'Stage 992',
    targetScore: 99200,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.497,
    modifiers: []
  },
  {
    levelNumber: 993,
    name: 'Stage 993',
    targetScore: 99300,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.497,
    modifiers: []
  },
  {
    levelNumber: 994,
    name: 'Stage 994',
    targetScore: 99400,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.498,
    modifiers: []
  },
  {
    levelNumber: 995,
    name: 'Stage 995',
    targetScore: 99500,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.498,
    modifiers: []
  },
  {
    levelNumber: 996,
    name: 'Stage 996',
    targetScore: 99600,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.498,
    modifiers: []
  },
  {
    levelNumber: 997,
    name: 'Stage 997',
    targetScore: 99700,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.499,
    modifiers: []
  },
  {
    levelNumber: 998,
    name: 'Stage 998',
    targetScore: 99800,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.499,
    modifiers: []
  },
  {
    levelNumber: 999,
    name: 'Stage 999',
    targetScore: 99900,
    timeLimit: 41,
    gridSize: 9,
    colorSimilarity: 0.500,
    modifiers: []
  },
  {
    levelNumber: 1000,
    name: 'Stage 1000',
    targetScore: 100000,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.500,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1001,
    name: 'Stage 1001',
    targetScore: 100100,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.500,
    modifiers: []
  },
  {
    levelNumber: 1002,
    name: 'Stage 1002',
    targetScore: 100200,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.501,
    modifiers: []
  },
  {
    levelNumber: 1003,
    name: 'Stage 1003',
    targetScore: 100300,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.501,
    modifiers: []
  },
  {
    levelNumber: 1004,
    name: 'Stage 1004',
    targetScore: 100400,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.502,
    modifiers: []
  },
  {
    levelNumber: 1005,
    name: 'Stage 1005',
    targetScore: 100500,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.502,
    modifiers: []
  },
  {
    levelNumber: 1006,
    name: 'Stage 1006',
    targetScore: 100600,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.502,
    modifiers: []
  },
  {
    levelNumber: 1007,
    name: 'Stage 1007',
    targetScore: 100700,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.503,
    modifiers: []
  },
  {
    levelNumber: 1008,
    name: 'Stage 1008',
    targetScore: 100800,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.503,
    modifiers: []
  },
  {
    levelNumber: 1009,
    name: 'Stage 1009',
    targetScore: 100900,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.504,
    modifiers: []
  },
  {
    levelNumber: 1010,
    name: 'Stage 1010',
    targetScore: 101000,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.504,
    modifiers: []
  },
  {
    levelNumber: 1011,
    name: 'Stage 1011',
    targetScore: 101100,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.504,
    modifiers: []
  },
  {
    levelNumber: 1012,
    name: 'Stage 1012',
    targetScore: 101200,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.505,
    modifiers: []
  },
  {
    levelNumber: 1013,
    name: 'Stage 1013',
    targetScore: 101300,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.505,
    modifiers: []
  },
  {
    levelNumber: 1014,
    name: 'Stage 1014',
    targetScore: 101400,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.506,
    modifiers: []
  },
  {
    levelNumber: 1015,
    name: 'Stage 1015',
    targetScore: 101500,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.506,
    modifiers: []
  },
  {
    levelNumber: 1016,
    name: 'Stage 1016',
    targetScore: 101600,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.506,
    modifiers: []
  },
  {
    levelNumber: 1017,
    name: 'Stage 1017',
    targetScore: 101700,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.507,
    modifiers: []
  },
  {
    levelNumber: 1018,
    name: 'Stage 1018',
    targetScore: 101800,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.507,
    modifiers: []
  },
  {
    levelNumber: 1019,
    name: 'Stage 1019',
    targetScore: 101900,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.508,
    modifiers: []
  },
  {
    levelNumber: 1020,
    name: 'Stage 1020',
    targetScore: 102000,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.508,
    modifiers: []
  },
  {
    levelNumber: 1021,
    name: 'Stage 1021',
    targetScore: 102100,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.508,
    modifiers: []
  },
  {
    levelNumber: 1022,
    name: 'Stage 1022',
    targetScore: 102200,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.509,
    modifiers: []
  },
  {
    levelNumber: 1023,
    name: 'Stage 1023',
    targetScore: 102300,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.509,
    modifiers: []
  },
  {
    levelNumber: 1024,
    name: 'Stage 1024',
    targetScore: 102400,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.510,
    modifiers: []
  },
  {
    levelNumber: 1025,
    name: 'Stage 1025',
    targetScore: 102500,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.510,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1026,
    name: 'Stage 1026',
    targetScore: 102600,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.510,
    modifiers: []
  },
  {
    levelNumber: 1027,
    name: 'Stage 1027',
    targetScore: 102700,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.511,
    modifiers: []
  },
  {
    levelNumber: 1028,
    name: 'Stage 1028',
    targetScore: 102800,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.511,
    modifiers: []
  },
  {
    levelNumber: 1029,
    name: 'Stage 1029',
    targetScore: 102900,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.512,
    modifiers: []
  },
  {
    levelNumber: 1030,
    name: 'Stage 1030',
    targetScore: 103000,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.512,
    modifiers: []
  },
  {
    levelNumber: 1031,
    name: 'Stage 1031',
    targetScore: 103100,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.512,
    modifiers: []
  },
  {
    levelNumber: 1032,
    name: 'Stage 1032',
    targetScore: 103200,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.513,
    modifiers: []
  },
  {
    levelNumber: 1033,
    name: 'Stage 1033',
    targetScore: 103300,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.513,
    modifiers: []
  },
  {
    levelNumber: 1034,
    name: 'Stage 1034',
    targetScore: 103400,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.514,
    modifiers: []
  },
  {
    levelNumber: 1035,
    name: 'Stage 1035',
    targetScore: 103500,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.514,
    modifiers: []
  },
  {
    levelNumber: 1036,
    name: 'Stage 1036',
    targetScore: 103600,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.514,
    modifiers: []
  },
  {
    levelNumber: 1037,
    name: 'Stage 1037',
    targetScore: 103700,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.515,
    modifiers: []
  },
  {
    levelNumber: 1038,
    name: 'Stage 1038',
    targetScore: 103800,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.515,
    modifiers: []
  },
  {
    levelNumber: 1039,
    name: 'Stage 1039',
    targetScore: 103900,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.516,
    modifiers: []
  },
  {
    levelNumber: 1040,
    name: 'Stage 1040',
    targetScore: 104000,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.516,
    modifiers: []
  },
  {
    levelNumber: 1041,
    name: 'Stage 1041',
    targetScore: 104100,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.516,
    modifiers: []
  },
  {
    levelNumber: 1042,
    name: 'Stage 1042',
    targetScore: 104200,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.517,
    modifiers: []
  },
  {
    levelNumber: 1043,
    name: 'Stage 1043',
    targetScore: 104300,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.517,
    modifiers: []
  },
  {
    levelNumber: 1044,
    name: 'Stage 1044',
    targetScore: 104400,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.518,
    modifiers: []
  },
  {
    levelNumber: 1045,
    name: 'Stage 1045',
    targetScore: 104500,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.518,
    modifiers: []
  },
  {
    levelNumber: 1046,
    name: 'Stage 1046',
    targetScore: 104600,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.518,
    modifiers: []
  },
  {
    levelNumber: 1047,
    name: 'Stage 1047',
    targetScore: 104700,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.519,
    modifiers: []
  },
  {
    levelNumber: 1048,
    name: 'Stage 1048',
    targetScore: 104800,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.519,
    modifiers: []
  },
  {
    levelNumber: 1049,
    name: 'Stage 1049',
    targetScore: 104900,
    timeLimit: 40,
    gridSize: 9,
    colorSimilarity: 0.520,
    modifiers: []
  },
  {
    levelNumber: 1050,
    name: 'Stage 1050',
    targetScore: 105000,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.520,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1051,
    name: 'Stage 1051',
    targetScore: 105100,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.520,
    modifiers: []
  },
  {
    levelNumber: 1052,
    name: 'Stage 1052',
    targetScore: 105200,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.521,
    modifiers: []
  },
  {
    levelNumber: 1053,
    name: 'Stage 1053',
    targetScore: 105300,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.521,
    modifiers: []
  },
  {
    levelNumber: 1054,
    name: 'Stage 1054',
    targetScore: 105400,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.522,
    modifiers: []
  },
  {
    levelNumber: 1055,
    name: 'Stage 1055',
    targetScore: 105500,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.522,
    modifiers: []
  },
  {
    levelNumber: 1056,
    name: 'Stage 1056',
    targetScore: 105600,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.522,
    modifiers: []
  },
  {
    levelNumber: 1057,
    name: 'Stage 1057',
    targetScore: 105700,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.523,
    modifiers: []
  },
  {
    levelNumber: 1058,
    name: 'Stage 1058',
    targetScore: 105800,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.523,
    modifiers: []
  },
  {
    levelNumber: 1059,
    name: 'Stage 1059',
    targetScore: 105900,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.524,
    modifiers: []
  },
  {
    levelNumber: 1060,
    name: 'Stage 1060',
    targetScore: 106000,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.524,
    modifiers: []
  },
  {
    levelNumber: 1061,
    name: 'Stage 1061',
    targetScore: 106100,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.524,
    modifiers: []
  },
  {
    levelNumber: 1062,
    name: 'Stage 1062',
    targetScore: 106200,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.525,
    modifiers: []
  },
  {
    levelNumber: 1063,
    name: 'Stage 1063',
    targetScore: 106300,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.525,
    modifiers: []
  },
  {
    levelNumber: 1064,
    name: 'Stage 1064',
    targetScore: 106400,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.526,
    modifiers: []
  },
  {
    levelNumber: 1065,
    name: 'Stage 1065',
    targetScore: 106500,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.526,
    modifiers: []
  },
  {
    levelNumber: 1066,
    name: 'Stage 1066',
    targetScore: 106600,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.526,
    modifiers: []
  },
  {
    levelNumber: 1067,
    name: 'Stage 1067',
    targetScore: 106700,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.527,
    modifiers: []
  },
  {
    levelNumber: 1068,
    name: 'Stage 1068',
    targetScore: 106800,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.527,
    modifiers: []
  },
  {
    levelNumber: 1069,
    name: 'Stage 1069',
    targetScore: 106900,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.528,
    modifiers: []
  },
  {
    levelNumber: 1070,
    name: 'Stage 1070',
    targetScore: 107000,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.528,
    modifiers: []
  },
  {
    levelNumber: 1071,
    name: 'Stage 1071',
    targetScore: 107100,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.528,
    modifiers: []
  },
  {
    levelNumber: 1072,
    name: 'Stage 1072',
    targetScore: 107200,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.529,
    modifiers: []
  },
  {
    levelNumber: 1073,
    name: 'Stage 1073',
    targetScore: 107300,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.529,
    modifiers: []
  },
  {
    levelNumber: 1074,
    name: 'Stage 1074',
    targetScore: 107400,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.530,
    modifiers: []
  },
  {
    levelNumber: 1075,
    name: 'Stage 1075',
    targetScore: 107500,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.530,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1076,
    name: 'Stage 1076',
    targetScore: 107600,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.530,
    modifiers: []
  },
  {
    levelNumber: 1077,
    name: 'Stage 1077',
    targetScore: 107700,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.531,
    modifiers: []
  },
  {
    levelNumber: 1078,
    name: 'Stage 1078',
    targetScore: 107800,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.531,
    modifiers: []
  },
  {
    levelNumber: 1079,
    name: 'Stage 1079',
    targetScore: 107900,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.532,
    modifiers: []
  },
  {
    levelNumber: 1080,
    name: 'Stage 1080',
    targetScore: 108000,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.532,
    modifiers: []
  },
  {
    levelNumber: 1081,
    name: 'Stage 1081',
    targetScore: 108100,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.532,
    modifiers: []
  },
  {
    levelNumber: 1082,
    name: 'Stage 1082',
    targetScore: 108200,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.533,
    modifiers: []
  },
  {
    levelNumber: 1083,
    name: 'Stage 1083',
    targetScore: 108300,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.533,
    modifiers: []
  },
  {
    levelNumber: 1084,
    name: 'Stage 1084',
    targetScore: 108400,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.534,
    modifiers: []
  },
  {
    levelNumber: 1085,
    name: 'Stage 1085',
    targetScore: 108500,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.534,
    modifiers: []
  },
  {
    levelNumber: 1086,
    name: 'Stage 1086',
    targetScore: 108600,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.534,
    modifiers: []
  },
  {
    levelNumber: 1087,
    name: 'Stage 1087',
    targetScore: 108700,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.535,
    modifiers: []
  },
  {
    levelNumber: 1088,
    name: 'Stage 1088',
    targetScore: 108800,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.535,
    modifiers: []
  },
  {
    levelNumber: 1089,
    name: 'Stage 1089',
    targetScore: 108900,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.536,
    modifiers: []
  },
  {
    levelNumber: 1090,
    name: 'Stage 1090',
    targetScore: 109000,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.536,
    modifiers: []
  },
  {
    levelNumber: 1091,
    name: 'Stage 1091',
    targetScore: 109100,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.536,
    modifiers: []
  },
  {
    levelNumber: 1092,
    name: 'Stage 1092',
    targetScore: 109200,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.537,
    modifiers: []
  },
  {
    levelNumber: 1093,
    name: 'Stage 1093',
    targetScore: 109300,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.537,
    modifiers: []
  },
  {
    levelNumber: 1094,
    name: 'Stage 1094',
    targetScore: 109400,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.538,
    modifiers: []
  },
  {
    levelNumber: 1095,
    name: 'Stage 1095',
    targetScore: 109500,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.538,
    modifiers: []
  },
  {
    levelNumber: 1096,
    name: 'Stage 1096',
    targetScore: 109600,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.538,
    modifiers: []
  },
  {
    levelNumber: 1097,
    name: 'Stage 1097',
    targetScore: 109700,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.539,
    modifiers: []
  },
  {
    levelNumber: 1098,
    name: 'Stage 1098',
    targetScore: 109800,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.539,
    modifiers: []
  },
  {
    levelNumber: 1099,
    name: 'Stage 1099',
    targetScore: 109900,
    timeLimit: 39,
    gridSize: 9,
    colorSimilarity: 0.540,
    modifiers: []
  },
  {
    levelNumber: 1100,
    name: 'Stage 1100',
    targetScore: 110000,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.540,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1101,
    name: 'Stage 1101',
    targetScore: 110100,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.540,
    modifiers: []
  },
  {
    levelNumber: 1102,
    name: 'Stage 1102',
    targetScore: 110200,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.541,
    modifiers: []
  },
  {
    levelNumber: 1103,
    name: 'Stage 1103',
    targetScore: 110300,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.541,
    modifiers: []
  },
  {
    levelNumber: 1104,
    name: 'Stage 1104',
    targetScore: 110400,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.542,
    modifiers: []
  },
  {
    levelNumber: 1105,
    name: 'Stage 1105',
    targetScore: 110500,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.542,
    modifiers: []
  },
  {
    levelNumber: 1106,
    name: 'Stage 1106',
    targetScore: 110600,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.542,
    modifiers: []
  },
  {
    levelNumber: 1107,
    name: 'Stage 1107',
    targetScore: 110700,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.543,
    modifiers: []
  },
  {
    levelNumber: 1108,
    name: 'Stage 1108',
    targetScore: 110800,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.543,
    modifiers: []
  },
  {
    levelNumber: 1109,
    name: 'Stage 1109',
    targetScore: 110900,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.544,
    modifiers: []
  },
  {
    levelNumber: 1110,
    name: 'Stage 1110',
    targetScore: 111000,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.544,
    modifiers: []
  },
  {
    levelNumber: 1111,
    name: 'Stage 1111',
    targetScore: 111100,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.544,
    modifiers: []
  },
  {
    levelNumber: 1112,
    name: 'Stage 1112',
    targetScore: 111200,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.545,
    modifiers: []
  },
  {
    levelNumber: 1113,
    name: 'Stage 1113',
    targetScore: 111300,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.545,
    modifiers: []
  },
  {
    levelNumber: 1114,
    name: 'Stage 1114',
    targetScore: 111400,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.546,
    modifiers: []
  },
  {
    levelNumber: 1115,
    name: 'Stage 1115',
    targetScore: 111500,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.546,
    modifiers: []
  },
  {
    levelNumber: 1116,
    name: 'Stage 1116',
    targetScore: 111600,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.546,
    modifiers: []
  },
  {
    levelNumber: 1117,
    name: 'Stage 1117',
    targetScore: 111700,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.547,
    modifiers: []
  },
  {
    levelNumber: 1118,
    name: 'Stage 1118',
    targetScore: 111800,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.547,
    modifiers: []
  },
  {
    levelNumber: 1119,
    name: 'Stage 1119',
    targetScore: 111900,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.548,
    modifiers: []
  },
  {
    levelNumber: 1120,
    name: 'Stage 1120',
    targetScore: 112000,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.548,
    modifiers: []
  },
  {
    levelNumber: 1121,
    name: 'Stage 1121',
    targetScore: 112100,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.548,
    modifiers: []
  },
  {
    levelNumber: 1122,
    name: 'Stage 1122',
    targetScore: 112200,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.549,
    modifiers: []
  },
  {
    levelNumber: 1123,
    name: 'Stage 1123',
    targetScore: 112300,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.549,
    modifiers: []
  },
  {
    levelNumber: 1124,
    name: 'Stage 1124',
    targetScore: 112400,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.550,
    modifiers: []
  },
  {
    levelNumber: 1125,
    name: 'Stage 1125',
    targetScore: 112500,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.550,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1126,
    name: 'Stage 1126',
    targetScore: 112600,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.550,
    modifiers: []
  },
  {
    levelNumber: 1127,
    name: 'Stage 1127',
    targetScore: 112700,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.551,
    modifiers: []
  },
  {
    levelNumber: 1128,
    name: 'Stage 1128',
    targetScore: 112800,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.551,
    modifiers: []
  },
  {
    levelNumber: 1129,
    name: 'Stage 1129',
    targetScore: 112900,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.552,
    modifiers: []
  },
  {
    levelNumber: 1130,
    name: 'Stage 1130',
    targetScore: 113000,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.552,
    modifiers: []
  },
  {
    levelNumber: 1131,
    name: 'Stage 1131',
    targetScore: 113100,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.552,
    modifiers: []
  },
  {
    levelNumber: 1132,
    name: 'Stage 1132',
    targetScore: 113200,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.553,
    modifiers: []
  },
  {
    levelNumber: 1133,
    name: 'Stage 1133',
    targetScore: 113300,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.553,
    modifiers: []
  },
  {
    levelNumber: 1134,
    name: 'Stage 1134',
    targetScore: 113400,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.554,
    modifiers: []
  },
  {
    levelNumber: 1135,
    name: 'Stage 1135',
    targetScore: 113500,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.554,
    modifiers: []
  },
  {
    levelNumber: 1136,
    name: 'Stage 1136',
    targetScore: 113600,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.554,
    modifiers: []
  },
  {
    levelNumber: 1137,
    name: 'Stage 1137',
    targetScore: 113700,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.555,
    modifiers: []
  },
  {
    levelNumber: 1138,
    name: 'Stage 1138',
    targetScore: 113800,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.555,
    modifiers: []
  },
  {
    levelNumber: 1139,
    name: 'Stage 1139',
    targetScore: 113900,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.556,
    modifiers: []
  },
  {
    levelNumber: 1140,
    name: 'Stage 1140',
    targetScore: 114000,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.556,
    modifiers: []
  },
  {
    levelNumber: 1141,
    name: 'Stage 1141',
    targetScore: 114100,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.556,
    modifiers: []
  },
  {
    levelNumber: 1142,
    name: 'Stage 1142',
    targetScore: 114200,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.557,
    modifiers: []
  },
  {
    levelNumber: 1143,
    name: 'Stage 1143',
    targetScore: 114300,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.557,
    modifiers: []
  },
  {
    levelNumber: 1144,
    name: 'Stage 1144',
    targetScore: 114400,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.558,
    modifiers: []
  },
  {
    levelNumber: 1145,
    name: 'Stage 1145',
    targetScore: 114500,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.558,
    modifiers: []
  },
  {
    levelNumber: 1146,
    name: 'Stage 1146',
    targetScore: 114600,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.558,
    modifiers: []
  },
  {
    levelNumber: 1147,
    name: 'Stage 1147',
    targetScore: 114700,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.559,
    modifiers: []
  },
  {
    levelNumber: 1148,
    name: 'Stage 1148',
    targetScore: 114800,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.559,
    modifiers: []
  },
  {
    levelNumber: 1149,
    name: 'Stage 1149',
    targetScore: 114900,
    timeLimit: 38,
    gridSize: 9,
    colorSimilarity: 0.560,
    modifiers: []
  },
  {
    levelNumber: 1150,
    name: 'Stage 1150',
    targetScore: 115000,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.560,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1151,
    name: 'Stage 1151',
    targetScore: 115100,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.560,
    modifiers: []
  },
  {
    levelNumber: 1152,
    name: 'Stage 1152',
    targetScore: 115200,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.561,
    modifiers: []
  },
  {
    levelNumber: 1153,
    name: 'Stage 1153',
    targetScore: 115300,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.561,
    modifiers: []
  },
  {
    levelNumber: 1154,
    name: 'Stage 1154',
    targetScore: 115400,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.562,
    modifiers: []
  },
  {
    levelNumber: 1155,
    name: 'Stage 1155',
    targetScore: 115500,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.562,
    modifiers: []
  },
  {
    levelNumber: 1156,
    name: 'Stage 1156',
    targetScore: 115600,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.562,
    modifiers: []
  },
  {
    levelNumber: 1157,
    name: 'Stage 1157',
    targetScore: 115700,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.563,
    modifiers: []
  },
  {
    levelNumber: 1158,
    name: 'Stage 1158',
    targetScore: 115800,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.563,
    modifiers: []
  },
  {
    levelNumber: 1159,
    name: 'Stage 1159',
    targetScore: 115900,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.564,
    modifiers: []
  },
  {
    levelNumber: 1160,
    name: 'Stage 1160',
    targetScore: 116000,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.564,
    modifiers: []
  },
  {
    levelNumber: 1161,
    name: 'Stage 1161',
    targetScore: 116100,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.564,
    modifiers: []
  },
  {
    levelNumber: 1162,
    name: 'Stage 1162',
    targetScore: 116200,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.565,
    modifiers: []
  },
  {
    levelNumber: 1163,
    name: 'Stage 1163',
    targetScore: 116300,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.565,
    modifiers: []
  },
  {
    levelNumber: 1164,
    name: 'Stage 1164',
    targetScore: 116400,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.566,
    modifiers: []
  },
  {
    levelNumber: 1165,
    name: 'Stage 1165',
    targetScore: 116500,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.566,
    modifiers: []
  },
  {
    levelNumber: 1166,
    name: 'Stage 1166',
    targetScore: 116600,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.566,
    modifiers: []
  },
  {
    levelNumber: 1167,
    name: 'Stage 1167',
    targetScore: 116700,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.567,
    modifiers: []
  },
  {
    levelNumber: 1168,
    name: 'Stage 1168',
    targetScore: 116800,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.567,
    modifiers: []
  },
  {
    levelNumber: 1169,
    name: 'Stage 1169',
    targetScore: 116900,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.568,
    modifiers: []
  },
  {
    levelNumber: 1170,
    name: 'Stage 1170',
    targetScore: 117000,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.568,
    modifiers: []
  },
  {
    levelNumber: 1171,
    name: 'Stage 1171',
    targetScore: 117100,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.568,
    modifiers: []
  },
  {
    levelNumber: 1172,
    name: 'Stage 1172',
    targetScore: 117200,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.569,
    modifiers: []
  },
  {
    levelNumber: 1173,
    name: 'Stage 1173',
    targetScore: 117300,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.569,
    modifiers: []
  },
  {
    levelNumber: 1174,
    name: 'Stage 1174',
    targetScore: 117400,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.570,
    modifiers: []
  },
  {
    levelNumber: 1175,
    name: 'Stage 1175',
    targetScore: 117500,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.570,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1176,
    name: 'Stage 1176',
    targetScore: 117600,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.570,
    modifiers: []
  },
  {
    levelNumber: 1177,
    name: 'Stage 1177',
    targetScore: 117700,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.571,
    modifiers: []
  },
  {
    levelNumber: 1178,
    name: 'Stage 1178',
    targetScore: 117800,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.571,
    modifiers: []
  },
  {
    levelNumber: 1179,
    name: 'Stage 1179',
    targetScore: 117900,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.572,
    modifiers: []
  },
  {
    levelNumber: 1180,
    name: 'Stage 1180',
    targetScore: 118000,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.572,
    modifiers: []
  },
  {
    levelNumber: 1181,
    name: 'Stage 1181',
    targetScore: 118100,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.572,
    modifiers: []
  },
  {
    levelNumber: 1182,
    name: 'Stage 1182',
    targetScore: 118200,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.573,
    modifiers: []
  },
  {
    levelNumber: 1183,
    name: 'Stage 1183',
    targetScore: 118300,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.573,
    modifiers: []
  },
  {
    levelNumber: 1184,
    name: 'Stage 1184',
    targetScore: 118400,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.574,
    modifiers: []
  },
  {
    levelNumber: 1185,
    name: 'Stage 1185',
    targetScore: 118500,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.574,
    modifiers: []
  },
  {
    levelNumber: 1186,
    name: 'Stage 1186',
    targetScore: 118600,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.574,
    modifiers: []
  },
  {
    levelNumber: 1187,
    name: 'Stage 1187',
    targetScore: 118700,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.575,
    modifiers: []
  },
  {
    levelNumber: 1188,
    name: 'Stage 1188',
    targetScore: 118800,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.575,
    modifiers: []
  },
  {
    levelNumber: 1189,
    name: 'Stage 1189',
    targetScore: 118900,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.576,
    modifiers: []
  },
  {
    levelNumber: 1190,
    name: 'Stage 1190',
    targetScore: 119000,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.576,
    modifiers: []
  },
  {
    levelNumber: 1191,
    name: 'Stage 1191',
    targetScore: 119100,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.576,
    modifiers: []
  },
  {
    levelNumber: 1192,
    name: 'Stage 1192',
    targetScore: 119200,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.577,
    modifiers: []
  },
  {
    levelNumber: 1193,
    name: 'Stage 1193',
    targetScore: 119300,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.577,
    modifiers: []
  },
  {
    levelNumber: 1194,
    name: 'Stage 1194',
    targetScore: 119400,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.578,
    modifiers: []
  },
  {
    levelNumber: 1195,
    name: 'Stage 1195',
    targetScore: 119500,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.578,
    modifiers: []
  },
  {
    levelNumber: 1196,
    name: 'Stage 1196',
    targetScore: 119600,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.578,
    modifiers: []
  },
  {
    levelNumber: 1197,
    name: 'Stage 1197',
    targetScore: 119700,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.579,
    modifiers: []
  },
  {
    levelNumber: 1198,
    name: 'Stage 1198',
    targetScore: 119800,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.579,
    modifiers: []
  },
  {
    levelNumber: 1199,
    name: 'Stage 1199',
    targetScore: 119900,
    timeLimit: 37,
    gridSize: 9,
    colorSimilarity: 0.580,
    modifiers: []
  },
  {
    levelNumber: 1200,
    name: 'Stage 1200',
    targetScore: 120000,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.580,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1201,
    name: 'Stage 1201',
    targetScore: 120100,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.580,
    modifiers: []
  },
  {
    levelNumber: 1202,
    name: 'Stage 1202',
    targetScore: 120200,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.581,
    modifiers: []
  },
  {
    levelNumber: 1203,
    name: 'Stage 1203',
    targetScore: 120300,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.581,
    modifiers: []
  },
  {
    levelNumber: 1204,
    name: 'Stage 1204',
    targetScore: 120400,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.582,
    modifiers: []
  },
  {
    levelNumber: 1205,
    name: 'Stage 1205',
    targetScore: 120500,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.582,
    modifiers: []
  },
  {
    levelNumber: 1206,
    name: 'Stage 1206',
    targetScore: 120600,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.582,
    modifiers: []
  },
  {
    levelNumber: 1207,
    name: 'Stage 1207',
    targetScore: 120700,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.583,
    modifiers: []
  },
  {
    levelNumber: 1208,
    name: 'Stage 1208',
    targetScore: 120800,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.583,
    modifiers: []
  },
  {
    levelNumber: 1209,
    name: 'Stage 1209',
    targetScore: 120900,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.584,
    modifiers: []
  },
  {
    levelNumber: 1210,
    name: 'Stage 1210',
    targetScore: 121000,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.584,
    modifiers: []
  },
  {
    levelNumber: 1211,
    name: 'Stage 1211',
    targetScore: 121100,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.584,
    modifiers: []
  },
  {
    levelNumber: 1212,
    name: 'Stage 1212',
    targetScore: 121200,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.585,
    modifiers: []
  },
  {
    levelNumber: 1213,
    name: 'Stage 1213',
    targetScore: 121300,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.585,
    modifiers: []
  },
  {
    levelNumber: 1214,
    name: 'Stage 1214',
    targetScore: 121400,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.586,
    modifiers: []
  },
  {
    levelNumber: 1215,
    name: 'Stage 1215',
    targetScore: 121500,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.586,
    modifiers: []
  },
  {
    levelNumber: 1216,
    name: 'Stage 1216',
    targetScore: 121600,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.586,
    modifiers: []
  },
  {
    levelNumber: 1217,
    name: 'Stage 1217',
    targetScore: 121700,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.587,
    modifiers: []
  },
  {
    levelNumber: 1218,
    name: 'Stage 1218',
    targetScore: 121800,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.587,
    modifiers: []
  },
  {
    levelNumber: 1219,
    name: 'Stage 1219',
    targetScore: 121900,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.588,
    modifiers: []
  },
  {
    levelNumber: 1220,
    name: 'Stage 1220',
    targetScore: 122000,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.588,
    modifiers: []
  },
  {
    levelNumber: 1221,
    name: 'Stage 1221',
    targetScore: 122100,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.588,
    modifiers: []
  },
  {
    levelNumber: 1222,
    name: 'Stage 1222',
    targetScore: 122200,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.589,
    modifiers: []
  },
  {
    levelNumber: 1223,
    name: 'Stage 1223',
    targetScore: 122300,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.589,
    modifiers: []
  },
  {
    levelNumber: 1224,
    name: 'Stage 1224',
    targetScore: 122400,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.590,
    modifiers: []
  },
  {
    levelNumber: 1225,
    name: 'Stage 1225',
    targetScore: 122500,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.590,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1226,
    name: 'Stage 1226',
    targetScore: 122600,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.590,
    modifiers: []
  },
  {
    levelNumber: 1227,
    name: 'Stage 1227',
    targetScore: 122700,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.591,
    modifiers: []
  },
  {
    levelNumber: 1228,
    name: 'Stage 1228',
    targetScore: 122800,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.591,
    modifiers: []
  },
  {
    levelNumber: 1229,
    name: 'Stage 1229',
    targetScore: 122900,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.592,
    modifiers: []
  },
  {
    levelNumber: 1230,
    name: 'Stage 1230',
    targetScore: 123000,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.592,
    modifiers: []
  },
  {
    levelNumber: 1231,
    name: 'Stage 1231',
    targetScore: 123100,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.592,
    modifiers: []
  },
  {
    levelNumber: 1232,
    name: 'Stage 1232',
    targetScore: 123200,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.593,
    modifiers: []
  },
  {
    levelNumber: 1233,
    name: 'Stage 1233',
    targetScore: 123300,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.593,
    modifiers: []
  },
  {
    levelNumber: 1234,
    name: 'Stage 1234',
    targetScore: 123400,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.594,
    modifiers: []
  },
  {
    levelNumber: 1235,
    name: 'Stage 1235',
    targetScore: 123500,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.594,
    modifiers: []
  },
  {
    levelNumber: 1236,
    name: 'Stage 1236',
    targetScore: 123600,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.594,
    modifiers: []
  },
  {
    levelNumber: 1237,
    name: 'Stage 1237',
    targetScore: 123700,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.595,
    modifiers: []
  },
  {
    levelNumber: 1238,
    name: 'Stage 1238',
    targetScore: 123800,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.595,
    modifiers: []
  },
  {
    levelNumber: 1239,
    name: 'Stage 1239',
    targetScore: 123900,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.596,
    modifiers: []
  },
  {
    levelNumber: 1240,
    name: 'Stage 1240',
    targetScore: 124000,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.596,
    modifiers: []
  },
  {
    levelNumber: 1241,
    name: 'Stage 1241',
    targetScore: 124100,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.596,
    modifiers: []
  },
  {
    levelNumber: 1242,
    name: 'Stage 1242',
    targetScore: 124200,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.597,
    modifiers: []
  },
  {
    levelNumber: 1243,
    name: 'Stage 1243',
    targetScore: 124300,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.597,
    modifiers: []
  },
  {
    levelNumber: 1244,
    name: 'Stage 1244',
    targetScore: 124400,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.598,
    modifiers: []
  },
  {
    levelNumber: 1245,
    name: 'Stage 1245',
    targetScore: 124500,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.598,
    modifiers: []
  },
  {
    levelNumber: 1246,
    name: 'Stage 1246',
    targetScore: 124600,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.598,
    modifiers: []
  },
  {
    levelNumber: 1247,
    name: 'Stage 1247',
    targetScore: 124700,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.599,
    modifiers: []
  },
  {
    levelNumber: 1248,
    name: 'Stage 1248',
    targetScore: 124800,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.599,
    modifiers: []
  },
  {
    levelNumber: 1249,
    name: 'Stage 1249',
    targetScore: 124900,
    timeLimit: 36,
    gridSize: 9,
    colorSimilarity: 0.600,
    modifiers: []
  },
  {
    levelNumber: 1250,
    name: 'Stage 1250',
    targetScore: 125000,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.600,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1251,
    name: 'Stage 1251',
    targetScore: 125100,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.600,
    modifiers: []
  },
  {
    levelNumber: 1252,
    name: 'Stage 1252',
    targetScore: 125200,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.601,
    modifiers: []
  },
  {
    levelNumber: 1253,
    name: 'Stage 1253',
    targetScore: 125300,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.601,
    modifiers: []
  },
  {
    levelNumber: 1254,
    name: 'Stage 1254',
    targetScore: 125400,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.602,
    modifiers: []
  },
  {
    levelNumber: 1255,
    name: 'Stage 1255',
    targetScore: 125500,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.602,
    modifiers: []
  },
  {
    levelNumber: 1256,
    name: 'Stage 1256',
    targetScore: 125600,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.602,
    modifiers: []
  },
  {
    levelNumber: 1257,
    name: 'Stage 1257',
    targetScore: 125700,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.603,
    modifiers: []
  },
  {
    levelNumber: 1258,
    name: 'Stage 1258',
    targetScore: 125800,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.603,
    modifiers: []
  },
  {
    levelNumber: 1259,
    name: 'Stage 1259',
    targetScore: 125900,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.604,
    modifiers: []
  },
  {
    levelNumber: 1260,
    name: 'Stage 1260',
    targetScore: 126000,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.604,
    modifiers: []
  },
  {
    levelNumber: 1261,
    name: 'Stage 1261',
    targetScore: 126100,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.604,
    modifiers: []
  },
  {
    levelNumber: 1262,
    name: 'Stage 1262',
    targetScore: 126200,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.605,
    modifiers: []
  },
  {
    levelNumber: 1263,
    name: 'Stage 1263',
    targetScore: 126300,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.605,
    modifiers: []
  },
  {
    levelNumber: 1264,
    name: 'Stage 1264',
    targetScore: 126400,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.606,
    modifiers: []
  },
  {
    levelNumber: 1265,
    name: 'Stage 1265',
    targetScore: 126500,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.606,
    modifiers: []
  },
  {
    levelNumber: 1266,
    name: 'Stage 1266',
    targetScore: 126600,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.606,
    modifiers: []
  },
  {
    levelNumber: 1267,
    name: 'Stage 1267',
    targetScore: 126700,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.607,
    modifiers: []
  },
  {
    levelNumber: 1268,
    name: 'Stage 1268',
    targetScore: 126800,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.607,
    modifiers: []
  },
  {
    levelNumber: 1269,
    name: 'Stage 1269',
    targetScore: 126900,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.608,
    modifiers: []
  },
  {
    levelNumber: 1270,
    name: 'Stage 1270',
    targetScore: 127000,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.608,
    modifiers: []
  },
  {
    levelNumber: 1271,
    name: 'Stage 1271',
    targetScore: 127100,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.608,
    modifiers: []
  },
  {
    levelNumber: 1272,
    name: 'Stage 1272',
    targetScore: 127200,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.609,
    modifiers: []
  },
  {
    levelNumber: 1273,
    name: 'Stage 1273',
    targetScore: 127300,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.609,
    modifiers: []
  },
  {
    levelNumber: 1274,
    name: 'Stage 1274',
    targetScore: 127400,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.610,
    modifiers: []
  },
  {
    levelNumber: 1275,
    name: 'Stage 1275',
    targetScore: 127500,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.610,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1276,
    name: 'Stage 1276',
    targetScore: 127600,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.610,
    modifiers: []
  },
  {
    levelNumber: 1277,
    name: 'Stage 1277',
    targetScore: 127700,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.611,
    modifiers: []
  },
  {
    levelNumber: 1278,
    name: 'Stage 1278',
    targetScore: 127800,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.611,
    modifiers: []
  },
  {
    levelNumber: 1279,
    name: 'Stage 1279',
    targetScore: 127900,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.612,
    modifiers: []
  },
  {
    levelNumber: 1280,
    name: 'Stage 1280',
    targetScore: 128000,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.612,
    modifiers: []
  },
  {
    levelNumber: 1281,
    name: 'Stage 1281',
    targetScore: 128100,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.612,
    modifiers: []
  },
  {
    levelNumber: 1282,
    name: 'Stage 1282',
    targetScore: 128200,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.613,
    modifiers: []
  },
  {
    levelNumber: 1283,
    name: 'Stage 1283',
    targetScore: 128300,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.613,
    modifiers: []
  },
  {
    levelNumber: 1284,
    name: 'Stage 1284',
    targetScore: 128400,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.614,
    modifiers: []
  },
  {
    levelNumber: 1285,
    name: 'Stage 1285',
    targetScore: 128500,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.614,
    modifiers: []
  },
  {
    levelNumber: 1286,
    name: 'Stage 1286',
    targetScore: 128600,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.614,
    modifiers: []
  },
  {
    levelNumber: 1287,
    name: 'Stage 1287',
    targetScore: 128700,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.615,
    modifiers: []
  },
  {
    levelNumber: 1288,
    name: 'Stage 1288',
    targetScore: 128800,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.615,
    modifiers: []
  },
  {
    levelNumber: 1289,
    name: 'Stage 1289',
    targetScore: 128900,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.616,
    modifiers: []
  },
  {
    levelNumber: 1290,
    name: 'Stage 1290',
    targetScore: 129000,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.616,
    modifiers: []
  },
  {
    levelNumber: 1291,
    name: 'Stage 1291',
    targetScore: 129100,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.616,
    modifiers: []
  },
  {
    levelNumber: 1292,
    name: 'Stage 1292',
    targetScore: 129200,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.617,
    modifiers: []
  },
  {
    levelNumber: 1293,
    name: 'Stage 1293',
    targetScore: 129300,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.617,
    modifiers: []
  },
  {
    levelNumber: 1294,
    name: 'Stage 1294',
    targetScore: 129400,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.618,
    modifiers: []
  },
  {
    levelNumber: 1295,
    name: 'Stage 1295',
    targetScore: 129500,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.618,
    modifiers: []
  },
  {
    levelNumber: 1296,
    name: 'Stage 1296',
    targetScore: 129600,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.618,
    modifiers: []
  },
  {
    levelNumber: 1297,
    name: 'Stage 1297',
    targetScore: 129700,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.619,
    modifiers: []
  },
  {
    levelNumber: 1298,
    name: 'Stage 1298',
    targetScore: 129800,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.619,
    modifiers: []
  },
  {
    levelNumber: 1299,
    name: 'Stage 1299',
    targetScore: 129900,
    timeLimit: 35,
    gridSize: 9,
    colorSimilarity: 0.620,
    modifiers: []
  },
  {
    levelNumber: 1300,
    name: 'Stage 1300',
    targetScore: 130000,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.620,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1301,
    name: 'Stage 1301',
    targetScore: 130100,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.620,
    modifiers: []
  },
  {
    levelNumber: 1302,
    name: 'Stage 1302',
    targetScore: 130200,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.621,
    modifiers: []
  },
  {
    levelNumber: 1303,
    name: 'Stage 1303',
    targetScore: 130300,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.621,
    modifiers: []
  },
  {
    levelNumber: 1304,
    name: 'Stage 1304',
    targetScore: 130400,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.622,
    modifiers: []
  },
  {
    levelNumber: 1305,
    name: 'Stage 1305',
    targetScore: 130500,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.622,
    modifiers: []
  },
  {
    levelNumber: 1306,
    name: 'Stage 1306',
    targetScore: 130600,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.622,
    modifiers: []
  },
  {
    levelNumber: 1307,
    name: 'Stage 1307',
    targetScore: 130700,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.623,
    modifiers: []
  },
  {
    levelNumber: 1308,
    name: 'Stage 1308',
    targetScore: 130800,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.623,
    modifiers: []
  },
  {
    levelNumber: 1309,
    name: 'Stage 1309',
    targetScore: 130900,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.624,
    modifiers: []
  },
  {
    levelNumber: 1310,
    name: 'Stage 1310',
    targetScore: 131000,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.624,
    modifiers: []
  },
  {
    levelNumber: 1311,
    name: 'Stage 1311',
    targetScore: 131100,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.624,
    modifiers: []
  },
  {
    levelNumber: 1312,
    name: 'Stage 1312',
    targetScore: 131200,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.625,
    modifiers: []
  },
  {
    levelNumber: 1313,
    name: 'Stage 1313',
    targetScore: 131300,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.625,
    modifiers: []
  },
  {
    levelNumber: 1314,
    name: 'Stage 1314',
    targetScore: 131400,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.626,
    modifiers: []
  },
  {
    levelNumber: 1315,
    name: 'Stage 1315',
    targetScore: 131500,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.626,
    modifiers: []
  },
  {
    levelNumber: 1316,
    name: 'Stage 1316',
    targetScore: 131600,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.626,
    modifiers: []
  },
  {
    levelNumber: 1317,
    name: 'Stage 1317',
    targetScore: 131700,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.627,
    modifiers: []
  },
  {
    levelNumber: 1318,
    name: 'Stage 1318',
    targetScore: 131800,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.627,
    modifiers: []
  },
  {
    levelNumber: 1319,
    name: 'Stage 1319',
    targetScore: 131900,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.628,
    modifiers: []
  },
  {
    levelNumber: 1320,
    name: 'Stage 1320',
    targetScore: 132000,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.628,
    modifiers: []
  },
  {
    levelNumber: 1321,
    name: 'Stage 1321',
    targetScore: 132100,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.628,
    modifiers: []
  },
  {
    levelNumber: 1322,
    name: 'Stage 1322',
    targetScore: 132200,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.629,
    modifiers: []
  },
  {
    levelNumber: 1323,
    name: 'Stage 1323',
    targetScore: 132300,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.629,
    modifiers: []
  },
  {
    levelNumber: 1324,
    name: 'Stage 1324',
    targetScore: 132400,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.630,
    modifiers: []
  },
  {
    levelNumber: 1325,
    name: 'Stage 1325',
    targetScore: 132500,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.630,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1326,
    name: 'Stage 1326',
    targetScore: 132600,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.630,
    modifiers: []
  },
  {
    levelNumber: 1327,
    name: 'Stage 1327',
    targetScore: 132700,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.631,
    modifiers: []
  },
  {
    levelNumber: 1328,
    name: 'Stage 1328',
    targetScore: 132800,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.631,
    modifiers: []
  },
  {
    levelNumber: 1329,
    name: 'Stage 1329',
    targetScore: 132900,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.632,
    modifiers: []
  },
  {
    levelNumber: 1330,
    name: 'Stage 1330',
    targetScore: 133000,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.632,
    modifiers: []
  },
  {
    levelNumber: 1331,
    name: 'Stage 1331',
    targetScore: 133100,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.632,
    modifiers: []
  },
  {
    levelNumber: 1332,
    name: 'Stage 1332',
    targetScore: 133200,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.633,
    modifiers: []
  },
  {
    levelNumber: 1333,
    name: 'Stage 1333',
    targetScore: 133300,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.633,
    modifiers: []
  },
  {
    levelNumber: 1334,
    name: 'Stage 1334',
    targetScore: 133400,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.634,
    modifiers: []
  },
  {
    levelNumber: 1335,
    name: 'Stage 1335',
    targetScore: 133500,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.634,
    modifiers: []
  },
  {
    levelNumber: 1336,
    name: 'Stage 1336',
    targetScore: 133600,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.634,
    modifiers: []
  },
  {
    levelNumber: 1337,
    name: 'Stage 1337',
    targetScore: 133700,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.635,
    modifiers: []
  },
  {
    levelNumber: 1338,
    name: 'Stage 1338',
    targetScore: 133800,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.635,
    modifiers: []
  },
  {
    levelNumber: 1339,
    name: 'Stage 1339',
    targetScore: 133900,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.636,
    modifiers: []
  },
  {
    levelNumber: 1340,
    name: 'Stage 1340',
    targetScore: 134000,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.636,
    modifiers: []
  },
  {
    levelNumber: 1341,
    name: 'Stage 1341',
    targetScore: 134100,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.636,
    modifiers: []
  },
  {
    levelNumber: 1342,
    name: 'Stage 1342',
    targetScore: 134200,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.637,
    modifiers: []
  },
  {
    levelNumber: 1343,
    name: 'Stage 1343',
    targetScore: 134300,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.637,
    modifiers: []
  },
  {
    levelNumber: 1344,
    name: 'Stage 1344',
    targetScore: 134400,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.638,
    modifiers: []
  },
  {
    levelNumber: 1345,
    name: 'Stage 1345',
    targetScore: 134500,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.638,
    modifiers: []
  },
  {
    levelNumber: 1346,
    name: 'Stage 1346',
    targetScore: 134600,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.638,
    modifiers: []
  },
  {
    levelNumber: 1347,
    name: 'Stage 1347',
    targetScore: 134700,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.639,
    modifiers: []
  },
  {
    levelNumber: 1348,
    name: 'Stage 1348',
    targetScore: 134800,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.639,
    modifiers: []
  },
  {
    levelNumber: 1349,
    name: 'Stage 1349',
    targetScore: 134900,
    timeLimit: 34,
    gridSize: 9,
    colorSimilarity: 0.640,
    modifiers: []
  },
  {
    levelNumber: 1350,
    name: 'Stage 1350',
    targetScore: 135000,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.640,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1351,
    name: 'Stage 1351',
    targetScore: 135100,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.640,
    modifiers: []
  },
  {
    levelNumber: 1352,
    name: 'Stage 1352',
    targetScore: 135200,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.641,
    modifiers: []
  },
  {
    levelNumber: 1353,
    name: 'Stage 1353',
    targetScore: 135300,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.641,
    modifiers: []
  },
  {
    levelNumber: 1354,
    name: 'Stage 1354',
    targetScore: 135400,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.642,
    modifiers: []
  },
  {
    levelNumber: 1355,
    name: 'Stage 1355',
    targetScore: 135500,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.642,
    modifiers: []
  },
  {
    levelNumber: 1356,
    name: 'Stage 1356',
    targetScore: 135600,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.642,
    modifiers: []
  },
  {
    levelNumber: 1357,
    name: 'Stage 1357',
    targetScore: 135700,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.643,
    modifiers: []
  },
  {
    levelNumber: 1358,
    name: 'Stage 1358',
    targetScore: 135800,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.643,
    modifiers: []
  },
  {
    levelNumber: 1359,
    name: 'Stage 1359',
    targetScore: 135900,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.644,
    modifiers: []
  },
  {
    levelNumber: 1360,
    name: 'Stage 1360',
    targetScore: 136000,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.644,
    modifiers: []
  },
  {
    levelNumber: 1361,
    name: 'Stage 1361',
    targetScore: 136100,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.644,
    modifiers: []
  },
  {
    levelNumber: 1362,
    name: 'Stage 1362',
    targetScore: 136200,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.645,
    modifiers: []
  },
  {
    levelNumber: 1363,
    name: 'Stage 1363',
    targetScore: 136300,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.645,
    modifiers: []
  },
  {
    levelNumber: 1364,
    name: 'Stage 1364',
    targetScore: 136400,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.646,
    modifiers: []
  },
  {
    levelNumber: 1365,
    name: 'Stage 1365',
    targetScore: 136500,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.646,
    modifiers: []
  },
  {
    levelNumber: 1366,
    name: 'Stage 1366',
    targetScore: 136600,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.646,
    modifiers: []
  },
  {
    levelNumber: 1367,
    name: 'Stage 1367',
    targetScore: 136700,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.647,
    modifiers: []
  },
  {
    levelNumber: 1368,
    name: 'Stage 1368',
    targetScore: 136800,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.647,
    modifiers: []
  },
  {
    levelNumber: 1369,
    name: 'Stage 1369',
    targetScore: 136900,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.648,
    modifiers: []
  },
  {
    levelNumber: 1370,
    name: 'Stage 1370',
    targetScore: 137000,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.648,
    modifiers: []
  },
  {
    levelNumber: 1371,
    name: 'Stage 1371',
    targetScore: 137100,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.648,
    modifiers: []
  },
  {
    levelNumber: 1372,
    name: 'Stage 1372',
    targetScore: 137200,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.649,
    modifiers: []
  },
  {
    levelNumber: 1373,
    name: 'Stage 1373',
    targetScore: 137300,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.649,
    modifiers: []
  },
  {
    levelNumber: 1374,
    name: 'Stage 1374',
    targetScore: 137400,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.650,
    modifiers: []
  },
  {
    levelNumber: 1375,
    name: 'Stage 1375',
    targetScore: 137500,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.650,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1376,
    name: 'Stage 1376',
    targetScore: 137600,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.650,
    modifiers: []
  },
  {
    levelNumber: 1377,
    name: 'Stage 1377',
    targetScore: 137700,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.651,
    modifiers: []
  },
  {
    levelNumber: 1378,
    name: 'Stage 1378',
    targetScore: 137800,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.651,
    modifiers: []
  },
  {
    levelNumber: 1379,
    name: 'Stage 1379',
    targetScore: 137900,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.652,
    modifiers: []
  },
  {
    levelNumber: 1380,
    name: 'Stage 1380',
    targetScore: 138000,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.652,
    modifiers: []
  },
  {
    levelNumber: 1381,
    name: 'Stage 1381',
    targetScore: 138100,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.652,
    modifiers: []
  },
  {
    levelNumber: 1382,
    name: 'Stage 1382',
    targetScore: 138200,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.653,
    modifiers: []
  },
  {
    levelNumber: 1383,
    name: 'Stage 1383',
    targetScore: 138300,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.653,
    modifiers: []
  },
  {
    levelNumber: 1384,
    name: 'Stage 1384',
    targetScore: 138400,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.654,
    modifiers: []
  },
  {
    levelNumber: 1385,
    name: 'Stage 1385',
    targetScore: 138500,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.654,
    modifiers: []
  },
  {
    levelNumber: 1386,
    name: 'Stage 1386',
    targetScore: 138600,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.654,
    modifiers: []
  },
  {
    levelNumber: 1387,
    name: 'Stage 1387',
    targetScore: 138700,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.655,
    modifiers: []
  },
  {
    levelNumber: 1388,
    name: 'Stage 1388',
    targetScore: 138800,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.655,
    modifiers: []
  },
  {
    levelNumber: 1389,
    name: 'Stage 1389',
    targetScore: 138900,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.656,
    modifiers: []
  },
  {
    levelNumber: 1390,
    name: 'Stage 1390',
    targetScore: 139000,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.656,
    modifiers: []
  },
  {
    levelNumber: 1391,
    name: 'Stage 1391',
    targetScore: 139100,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.656,
    modifiers: []
  },
  {
    levelNumber: 1392,
    name: 'Stage 1392',
    targetScore: 139200,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.657,
    modifiers: []
  },
  {
    levelNumber: 1393,
    name: 'Stage 1393',
    targetScore: 139300,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.657,
    modifiers: []
  },
  {
    levelNumber: 1394,
    name: 'Stage 1394',
    targetScore: 139400,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.658,
    modifiers: []
  },
  {
    levelNumber: 1395,
    name: 'Stage 1395',
    targetScore: 139500,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.658,
    modifiers: []
  },
  {
    levelNumber: 1396,
    name: 'Stage 1396',
    targetScore: 139600,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.658,
    modifiers: []
  },
  {
    levelNumber: 1397,
    name: 'Stage 1397',
    targetScore: 139700,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.659,
    modifiers: []
  },
  {
    levelNumber: 1398,
    name: 'Stage 1398',
    targetScore: 139800,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.659,
    modifiers: []
  },
  {
    levelNumber: 1399,
    name: 'Stage 1399',
    targetScore: 139900,
    timeLimit: 33,
    gridSize: 9,
    colorSimilarity: 0.660,
    modifiers: []
  },
  {
    levelNumber: 1400,
    name: 'Stage 1400',
    targetScore: 140000,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.660,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1401,
    name: 'Stage 1401',
    targetScore: 140100,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.660,
    modifiers: []
  },
  {
    levelNumber: 1402,
    name: 'Stage 1402',
    targetScore: 140200,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.661,
    modifiers: []
  },
  {
    levelNumber: 1403,
    name: 'Stage 1403',
    targetScore: 140300,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.661,
    modifiers: []
  },
  {
    levelNumber: 1404,
    name: 'Stage 1404',
    targetScore: 140400,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.662,
    modifiers: []
  },
  {
    levelNumber: 1405,
    name: 'Stage 1405',
    targetScore: 140500,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.662,
    modifiers: []
  },
  {
    levelNumber: 1406,
    name: 'Stage 1406',
    targetScore: 140600,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.662,
    modifiers: []
  },
  {
    levelNumber: 1407,
    name: 'Stage 1407',
    targetScore: 140700,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.663,
    modifiers: []
  },
  {
    levelNumber: 1408,
    name: 'Stage 1408',
    targetScore: 140800,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.663,
    modifiers: []
  },
  {
    levelNumber: 1409,
    name: 'Stage 1409',
    targetScore: 140900,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.664,
    modifiers: []
  },
  {
    levelNumber: 1410,
    name: 'Stage 1410',
    targetScore: 141000,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.664,
    modifiers: []
  },
  {
    levelNumber: 1411,
    name: 'Stage 1411',
    targetScore: 141100,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.664,
    modifiers: []
  },
  {
    levelNumber: 1412,
    name: 'Stage 1412',
    targetScore: 141200,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.665,
    modifiers: []
  },
  {
    levelNumber: 1413,
    name: 'Stage 1413',
    targetScore: 141300,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.665,
    modifiers: []
  },
  {
    levelNumber: 1414,
    name: 'Stage 1414',
    targetScore: 141400,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.666,
    modifiers: []
  },
  {
    levelNumber: 1415,
    name: 'Stage 1415',
    targetScore: 141500,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.666,
    modifiers: []
  },
  {
    levelNumber: 1416,
    name: 'Stage 1416',
    targetScore: 141600,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.666,
    modifiers: []
  },
  {
    levelNumber: 1417,
    name: 'Stage 1417',
    targetScore: 141700,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.667,
    modifiers: []
  },
  {
    levelNumber: 1418,
    name: 'Stage 1418',
    targetScore: 141800,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.667,
    modifiers: []
  },
  {
    levelNumber: 1419,
    name: 'Stage 1419',
    targetScore: 141900,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.668,
    modifiers: []
  },
  {
    levelNumber: 1420,
    name: 'Stage 1420',
    targetScore: 142000,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.668,
    modifiers: []
  },
  {
    levelNumber: 1421,
    name: 'Stage 1421',
    targetScore: 142100,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.668,
    modifiers: []
  },
  {
    levelNumber: 1422,
    name: 'Stage 1422',
    targetScore: 142200,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.669,
    modifiers: []
  },
  {
    levelNumber: 1423,
    name: 'Stage 1423',
    targetScore: 142300,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.669,
    modifiers: []
  },
  {
    levelNumber: 1424,
    name: 'Stage 1424',
    targetScore: 142400,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.670,
    modifiers: []
  },
  {
    levelNumber: 1425,
    name: 'Stage 1425',
    targetScore: 142500,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.670,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1426,
    name: 'Stage 1426',
    targetScore: 142600,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.670,
    modifiers: []
  },
  {
    levelNumber: 1427,
    name: 'Stage 1427',
    targetScore: 142700,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.671,
    modifiers: []
  },
  {
    levelNumber: 1428,
    name: 'Stage 1428',
    targetScore: 142800,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.671,
    modifiers: []
  },
  {
    levelNumber: 1429,
    name: 'Stage 1429',
    targetScore: 142900,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.672,
    modifiers: []
  },
  {
    levelNumber: 1430,
    name: 'Stage 1430',
    targetScore: 143000,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.672,
    modifiers: []
  },
  {
    levelNumber: 1431,
    name: 'Stage 1431',
    targetScore: 143100,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.672,
    modifiers: []
  },
  {
    levelNumber: 1432,
    name: 'Stage 1432',
    targetScore: 143200,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.673,
    modifiers: []
  },
  {
    levelNumber: 1433,
    name: 'Stage 1433',
    targetScore: 143300,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.673,
    modifiers: []
  },
  {
    levelNumber: 1434,
    name: 'Stage 1434',
    targetScore: 143400,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.674,
    modifiers: []
  },
  {
    levelNumber: 1435,
    name: 'Stage 1435',
    targetScore: 143500,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.674,
    modifiers: []
  },
  {
    levelNumber: 1436,
    name: 'Stage 1436',
    targetScore: 143600,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.674,
    modifiers: []
  },
  {
    levelNumber: 1437,
    name: 'Stage 1437',
    targetScore: 143700,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.675,
    modifiers: []
  },
  {
    levelNumber: 1438,
    name: 'Stage 1438',
    targetScore: 143800,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.675,
    modifiers: []
  },
  {
    levelNumber: 1439,
    name: 'Stage 1439',
    targetScore: 143900,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.676,
    modifiers: []
  },
  {
    levelNumber: 1440,
    name: 'Stage 1440',
    targetScore: 144000,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.676,
    modifiers: []
  },
  {
    levelNumber: 1441,
    name: 'Stage 1441',
    targetScore: 144100,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.676,
    modifiers: []
  },
  {
    levelNumber: 1442,
    name: 'Stage 1442',
    targetScore: 144200,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.677,
    modifiers: []
  },
  {
    levelNumber: 1443,
    name: 'Stage 1443',
    targetScore: 144300,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.677,
    modifiers: []
  },
  {
    levelNumber: 1444,
    name: 'Stage 1444',
    targetScore: 144400,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.678,
    modifiers: []
  },
  {
    levelNumber: 1445,
    name: 'Stage 1445',
    targetScore: 144500,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.678,
    modifiers: []
  },
  {
    levelNumber: 1446,
    name: 'Stage 1446',
    targetScore: 144600,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.678,
    modifiers: []
  },
  {
    levelNumber: 1447,
    name: 'Stage 1447',
    targetScore: 144700,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.679,
    modifiers: []
  },
  {
    levelNumber: 1448,
    name: 'Stage 1448',
    targetScore: 144800,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.679,
    modifiers: []
  },
  {
    levelNumber: 1449,
    name: 'Stage 1449',
    targetScore: 144900,
    timeLimit: 32,
    gridSize: 9,
    colorSimilarity: 0.680,
    modifiers: []
  },
  {
    levelNumber: 1450,
    name: 'Stage 1450',
    targetScore: 145000,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.680,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1451,
    name: 'Stage 1451',
    targetScore: 145100,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.680,
    modifiers: []
  },
  {
    levelNumber: 1452,
    name: 'Stage 1452',
    targetScore: 145200,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.681,
    modifiers: []
  },
  {
    levelNumber: 1453,
    name: 'Stage 1453',
    targetScore: 145300,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.681,
    modifiers: []
  },
  {
    levelNumber: 1454,
    name: 'Stage 1454',
    targetScore: 145400,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.682,
    modifiers: []
  },
  {
    levelNumber: 1455,
    name: 'Stage 1455',
    targetScore: 145500,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.682,
    modifiers: []
  },
  {
    levelNumber: 1456,
    name: 'Stage 1456',
    targetScore: 145600,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.682,
    modifiers: []
  },
  {
    levelNumber: 1457,
    name: 'Stage 1457',
    targetScore: 145700,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.683,
    modifiers: []
  },
  {
    levelNumber: 1458,
    name: 'Stage 1458',
    targetScore: 145800,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.683,
    modifiers: []
  },
  {
    levelNumber: 1459,
    name: 'Stage 1459',
    targetScore: 145900,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.684,
    modifiers: []
  },
  {
    levelNumber: 1460,
    name: 'Stage 1460',
    targetScore: 146000,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.684,
    modifiers: []
  },
  {
    levelNumber: 1461,
    name: 'Stage 1461',
    targetScore: 146100,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.684,
    modifiers: []
  },
  {
    levelNumber: 1462,
    name: 'Stage 1462',
    targetScore: 146200,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.685,
    modifiers: []
  },
  {
    levelNumber: 1463,
    name: 'Stage 1463',
    targetScore: 146300,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.685,
    modifiers: []
  },
  {
    levelNumber: 1464,
    name: 'Stage 1464',
    targetScore: 146400,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.686,
    modifiers: []
  },
  {
    levelNumber: 1465,
    name: 'Stage 1465',
    targetScore: 146500,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.686,
    modifiers: []
  },
  {
    levelNumber: 1466,
    name: 'Stage 1466',
    targetScore: 146600,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.686,
    modifiers: []
  },
  {
    levelNumber: 1467,
    name: 'Stage 1467',
    targetScore: 146700,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.687,
    modifiers: []
  },
  {
    levelNumber: 1468,
    name: 'Stage 1468',
    targetScore: 146800,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.687,
    modifiers: []
  },
  {
    levelNumber: 1469,
    name: 'Stage 1469',
    targetScore: 146900,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.688,
    modifiers: []
  },
  {
    levelNumber: 1470,
    name: 'Stage 1470',
    targetScore: 147000,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.688,
    modifiers: []
  },
  {
    levelNumber: 1471,
    name: 'Stage 1471',
    targetScore: 147100,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.688,
    modifiers: []
  },
  {
    levelNumber: 1472,
    name: 'Stage 1472',
    targetScore: 147200,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.689,
    modifiers: []
  },
  {
    levelNumber: 1473,
    name: 'Stage 1473',
    targetScore: 147300,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.689,
    modifiers: []
  },
  {
    levelNumber: 1474,
    name: 'Stage 1474',
    targetScore: 147400,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.690,
    modifiers: []
  },
  {
    levelNumber: 1475,
    name: 'Stage 1475',
    targetScore: 147500,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.690,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1476,
    name: 'Stage 1476',
    targetScore: 147600,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.690,
    modifiers: []
  },
  {
    levelNumber: 1477,
    name: 'Stage 1477',
    targetScore: 147700,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.691,
    modifiers: []
  },
  {
    levelNumber: 1478,
    name: 'Stage 1478',
    targetScore: 147800,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.691,
    modifiers: []
  },
  {
    levelNumber: 1479,
    name: 'Stage 1479',
    targetScore: 147900,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.692,
    modifiers: []
  },
  {
    levelNumber: 1480,
    name: 'Stage 1480',
    targetScore: 148000,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.692,
    modifiers: []
  },
  {
    levelNumber: 1481,
    name: 'Stage 1481',
    targetScore: 148100,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.692,
    modifiers: []
  },
  {
    levelNumber: 1482,
    name: 'Stage 1482',
    targetScore: 148200,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.693,
    modifiers: []
  },
  {
    levelNumber: 1483,
    name: 'Stage 1483',
    targetScore: 148300,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.693,
    modifiers: []
  },
  {
    levelNumber: 1484,
    name: 'Stage 1484',
    targetScore: 148400,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.694,
    modifiers: []
  },
  {
    levelNumber: 1485,
    name: 'Stage 1485',
    targetScore: 148500,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.694,
    modifiers: []
  },
  {
    levelNumber: 1486,
    name: 'Stage 1486',
    targetScore: 148600,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.694,
    modifiers: []
  },
  {
    levelNumber: 1487,
    name: 'Stage 1487',
    targetScore: 148700,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.695,
    modifiers: []
  },
  {
    levelNumber: 1488,
    name: 'Stage 1488',
    targetScore: 148800,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.695,
    modifiers: []
  },
  {
    levelNumber: 1489,
    name: 'Stage 1489',
    targetScore: 148900,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.696,
    modifiers: []
  },
  {
    levelNumber: 1490,
    name: 'Stage 1490',
    targetScore: 149000,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.696,
    modifiers: []
  },
  {
    levelNumber: 1491,
    name: 'Stage 1491',
    targetScore: 149100,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.696,
    modifiers: []
  },
  {
    levelNumber: 1492,
    name: 'Stage 1492',
    targetScore: 149200,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.697,
    modifiers: []
  },
  {
    levelNumber: 1493,
    name: 'Stage 1493',
    targetScore: 149300,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.697,
    modifiers: []
  },
  {
    levelNumber: 1494,
    name: 'Stage 1494',
    targetScore: 149400,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.698,
    modifiers: []
  },
  {
    levelNumber: 1495,
    name: 'Stage 1495',
    targetScore: 149500,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.698,
    modifiers: []
  },
  {
    levelNumber: 1496,
    name: 'Stage 1496',
    targetScore: 149600,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.698,
    modifiers: []
  },
  {
    levelNumber: 1497,
    name: 'Stage 1497',
    targetScore: 149700,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.699,
    modifiers: []
  },
  {
    levelNumber: 1498,
    name: 'Stage 1498',
    targetScore: 149800,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.699,
    modifiers: []
  },
  {
    levelNumber: 1499,
    name: 'Stage 1499',
    targetScore: 149900,
    timeLimit: 31,
    gridSize: 9,
    colorSimilarity: 0.700,
    modifiers: []
  },
  {
    levelNumber: 1500,
    name: 'Stage 1500',
    targetScore: 150000,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.700,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1501,
    name: 'Stage 1501',
    targetScore: 150100,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.700,
    modifiers: []
  },
  {
    levelNumber: 1502,
    name: 'Stage 1502',
    targetScore: 150200,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.701,
    modifiers: []
  },
  {
    levelNumber: 1503,
    name: 'Stage 1503',
    targetScore: 150300,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.701,
    modifiers: []
  },
  {
    levelNumber: 1504,
    name: 'Stage 1504',
    targetScore: 150400,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.702,
    modifiers: []
  },
  {
    levelNumber: 1505,
    name: 'Stage 1505',
    targetScore: 150500,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.702,
    modifiers: []
  },
  {
    levelNumber: 1506,
    name: 'Stage 1506',
    targetScore: 150600,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.702,
    modifiers: []
  },
  {
    levelNumber: 1507,
    name: 'Stage 1507',
    targetScore: 150700,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.703,
    modifiers: []
  },
  {
    levelNumber: 1508,
    name: 'Stage 1508',
    targetScore: 150800,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.703,
    modifiers: []
  },
  {
    levelNumber: 1509,
    name: 'Stage 1509',
    targetScore: 150900,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.704,
    modifiers: []
  },
  {
    levelNumber: 1510,
    name: 'Stage 1510',
    targetScore: 151000,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.704,
    modifiers: []
  },
  {
    levelNumber: 1511,
    name: 'Stage 1511',
    targetScore: 151100,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.704,
    modifiers: []
  },
  {
    levelNumber: 1512,
    name: 'Stage 1512',
    targetScore: 151200,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.705,
    modifiers: []
  },
  {
    levelNumber: 1513,
    name: 'Stage 1513',
    targetScore: 151300,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.705,
    modifiers: []
  },
  {
    levelNumber: 1514,
    name: 'Stage 1514',
    targetScore: 151400,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.706,
    modifiers: []
  },
  {
    levelNumber: 1515,
    name: 'Stage 1515',
    targetScore: 151500,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.706,
    modifiers: []
  },
  {
    levelNumber: 1516,
    name: 'Stage 1516',
    targetScore: 151600,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.706,
    modifiers: []
  },
  {
    levelNumber: 1517,
    name: 'Stage 1517',
    targetScore: 151700,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.707,
    modifiers: []
  },
  {
    levelNumber: 1518,
    name: 'Stage 1518',
    targetScore: 151800,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.707,
    modifiers: []
  },
  {
    levelNumber: 1519,
    name: 'Stage 1519',
    targetScore: 151900,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.708,
    modifiers: []
  },
  {
    levelNumber: 1520,
    name: 'Stage 1520',
    targetScore: 152000,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.708,
    modifiers: []
  },
  {
    levelNumber: 1521,
    name: 'Stage 1521',
    targetScore: 152100,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.708,
    modifiers: []
  },
  {
    levelNumber: 1522,
    name: 'Stage 1522',
    targetScore: 152200,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.709,
    modifiers: []
  },
  {
    levelNumber: 1523,
    name: 'Stage 1523',
    targetScore: 152300,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.709,
    modifiers: []
  },
  {
    levelNumber: 1524,
    name: 'Stage 1524',
    targetScore: 152400,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.710,
    modifiers: []
  },
  {
    levelNumber: 1525,
    name: 'Stage 1525',
    targetScore: 152500,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.710,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1526,
    name: 'Stage 1526',
    targetScore: 152600,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.710,
    modifiers: []
  },
  {
    levelNumber: 1527,
    name: 'Stage 1527',
    targetScore: 152700,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.711,
    modifiers: []
  },
  {
    levelNumber: 1528,
    name: 'Stage 1528',
    targetScore: 152800,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.711,
    modifiers: []
  },
  {
    levelNumber: 1529,
    name: 'Stage 1529',
    targetScore: 152900,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.712,
    modifiers: []
  },
  {
    levelNumber: 1530,
    name: 'Stage 1530',
    targetScore: 153000,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.712,
    modifiers: []
  },
  {
    levelNumber: 1531,
    name: 'Stage 1531',
    targetScore: 153100,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.712,
    modifiers: []
  },
  {
    levelNumber: 1532,
    name: 'Stage 1532',
    targetScore: 153200,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.713,
    modifiers: []
  },
  {
    levelNumber: 1533,
    name: 'Stage 1533',
    targetScore: 153300,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.713,
    modifiers: []
  },
  {
    levelNumber: 1534,
    name: 'Stage 1534',
    targetScore: 153400,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.714,
    modifiers: []
  },
  {
    levelNumber: 1535,
    name: 'Stage 1535',
    targetScore: 153500,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.714,
    modifiers: []
  },
  {
    levelNumber: 1536,
    name: 'Stage 1536',
    targetScore: 153600,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.714,
    modifiers: []
  },
  {
    levelNumber: 1537,
    name: 'Stage 1537',
    targetScore: 153700,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.715,
    modifiers: []
  },
  {
    levelNumber: 1538,
    name: 'Stage 1538',
    targetScore: 153800,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.715,
    modifiers: []
  },
  {
    levelNumber: 1539,
    name: 'Stage 1539',
    targetScore: 153900,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.716,
    modifiers: []
  },
  {
    levelNumber: 1540,
    name: 'Stage 1540',
    targetScore: 154000,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.716,
    modifiers: []
  },
  {
    levelNumber: 1541,
    name: 'Stage 1541',
    targetScore: 154100,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.716,
    modifiers: []
  },
  {
    levelNumber: 1542,
    name: 'Stage 1542',
    targetScore: 154200,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.717,
    modifiers: []
  },
  {
    levelNumber: 1543,
    name: 'Stage 1543',
    targetScore: 154300,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.717,
    modifiers: []
  },
  {
    levelNumber: 1544,
    name: 'Stage 1544',
    targetScore: 154400,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.718,
    modifiers: []
  },
  {
    levelNumber: 1545,
    name: 'Stage 1545',
    targetScore: 154500,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.718,
    modifiers: []
  },
  {
    levelNumber: 1546,
    name: 'Stage 1546',
    targetScore: 154600,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.718,
    modifiers: []
  },
  {
    levelNumber: 1547,
    name: 'Stage 1547',
    targetScore: 154700,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.719,
    modifiers: []
  },
  {
    levelNumber: 1548,
    name: 'Stage 1548',
    targetScore: 154800,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.719,
    modifiers: []
  },
  {
    levelNumber: 1549,
    name: 'Stage 1549',
    targetScore: 154900,
    timeLimit: 30,
    gridSize: 9,
    colorSimilarity: 0.720,
    modifiers: []
  },
  {
    levelNumber: 1550,
    name: 'Stage 1550',
    targetScore: 155000,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.720,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1551,
    name: 'Stage 1551',
    targetScore: 155100,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.720,
    modifiers: []
  },
  {
    levelNumber: 1552,
    name: 'Stage 1552',
    targetScore: 155200,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.721,
    modifiers: []
  },
  {
    levelNumber: 1553,
    name: 'Stage 1553',
    targetScore: 155300,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.721,
    modifiers: []
  },
  {
    levelNumber: 1554,
    name: 'Stage 1554',
    targetScore: 155400,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.722,
    modifiers: []
  },
  {
    levelNumber: 1555,
    name: 'Stage 1555',
    targetScore: 155500,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.722,
    modifiers: []
  },
  {
    levelNumber: 1556,
    name: 'Stage 1556',
    targetScore: 155600,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.722,
    modifiers: []
  },
  {
    levelNumber: 1557,
    name: 'Stage 1557',
    targetScore: 155700,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.723,
    modifiers: []
  },
  {
    levelNumber: 1558,
    name: 'Stage 1558',
    targetScore: 155800,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.723,
    modifiers: []
  },
  {
    levelNumber: 1559,
    name: 'Stage 1559',
    targetScore: 155900,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.724,
    modifiers: []
  },
  {
    levelNumber: 1560,
    name: 'Stage 1560',
    targetScore: 156000,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.724,
    modifiers: []
  },
  {
    levelNumber: 1561,
    name: 'Stage 1561',
    targetScore: 156100,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.724,
    modifiers: []
  },
  {
    levelNumber: 1562,
    name: 'Stage 1562',
    targetScore: 156200,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.725,
    modifiers: []
  },
  {
    levelNumber: 1563,
    name: 'Stage 1563',
    targetScore: 156300,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.725,
    modifiers: []
  },
  {
    levelNumber: 1564,
    name: 'Stage 1564',
    targetScore: 156400,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.726,
    modifiers: []
  },
  {
    levelNumber: 1565,
    name: 'Stage 1565',
    targetScore: 156500,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.726,
    modifiers: []
  },
  {
    levelNumber: 1566,
    name: 'Stage 1566',
    targetScore: 156600,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.726,
    modifiers: []
  },
  {
    levelNumber: 1567,
    name: 'Stage 1567',
    targetScore: 156700,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.727,
    modifiers: []
  },
  {
    levelNumber: 1568,
    name: 'Stage 1568',
    targetScore: 156800,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.727,
    modifiers: []
  },
  {
    levelNumber: 1569,
    name: 'Stage 1569',
    targetScore: 156900,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.728,
    modifiers: []
  },
  {
    levelNumber: 1570,
    name: 'Stage 1570',
    targetScore: 157000,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.728,
    modifiers: []
  },
  {
    levelNumber: 1571,
    name: 'Stage 1571',
    targetScore: 157100,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.728,
    modifiers: []
  },
  {
    levelNumber: 1572,
    name: 'Stage 1572',
    targetScore: 157200,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.729,
    modifiers: []
  },
  {
    levelNumber: 1573,
    name: 'Stage 1573',
    targetScore: 157300,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.729,
    modifiers: []
  },
  {
    levelNumber: 1574,
    name: 'Stage 1574',
    targetScore: 157400,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.730,
    modifiers: []
  },
  {
    levelNumber: 1575,
    name: 'Stage 1575',
    targetScore: 157500,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.730,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1576,
    name: 'Stage 1576',
    targetScore: 157600,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.730,
    modifiers: []
  },
  {
    levelNumber: 1577,
    name: 'Stage 1577',
    targetScore: 157700,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.731,
    modifiers: []
  },
  {
    levelNumber: 1578,
    name: 'Stage 1578',
    targetScore: 157800,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.731,
    modifiers: []
  },
  {
    levelNumber: 1579,
    name: 'Stage 1579',
    targetScore: 157900,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.732,
    modifiers: []
  },
  {
    levelNumber: 1580,
    name: 'Stage 1580',
    targetScore: 158000,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.732,
    modifiers: []
  },
  {
    levelNumber: 1581,
    name: 'Stage 1581',
    targetScore: 158100,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.732,
    modifiers: []
  },
  {
    levelNumber: 1582,
    name: 'Stage 1582',
    targetScore: 158200,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.733,
    modifiers: []
  },
  {
    levelNumber: 1583,
    name: 'Stage 1583',
    targetScore: 158300,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.733,
    modifiers: []
  },
  {
    levelNumber: 1584,
    name: 'Stage 1584',
    targetScore: 158400,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.734,
    modifiers: []
  },
  {
    levelNumber: 1585,
    name: 'Stage 1585',
    targetScore: 158500,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.734,
    modifiers: []
  },
  {
    levelNumber: 1586,
    name: 'Stage 1586',
    targetScore: 158600,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.734,
    modifiers: []
  },
  {
    levelNumber: 1587,
    name: 'Stage 1587',
    targetScore: 158700,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.735,
    modifiers: []
  },
  {
    levelNumber: 1588,
    name: 'Stage 1588',
    targetScore: 158800,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.735,
    modifiers: []
  },
  {
    levelNumber: 1589,
    name: 'Stage 1589',
    targetScore: 158900,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.736,
    modifiers: []
  },
  {
    levelNumber: 1590,
    name: 'Stage 1590',
    targetScore: 159000,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.736,
    modifiers: []
  },
  {
    levelNumber: 1591,
    name: 'Stage 1591',
    targetScore: 159100,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.736,
    modifiers: []
  },
  {
    levelNumber: 1592,
    name: 'Stage 1592',
    targetScore: 159200,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.737,
    modifiers: []
  },
  {
    levelNumber: 1593,
    name: 'Stage 1593',
    targetScore: 159300,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.737,
    modifiers: []
  },
  {
    levelNumber: 1594,
    name: 'Stage 1594',
    targetScore: 159400,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.738,
    modifiers: []
  },
  {
    levelNumber: 1595,
    name: 'Stage 1595',
    targetScore: 159500,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.738,
    modifiers: []
  },
  {
    levelNumber: 1596,
    name: 'Stage 1596',
    targetScore: 159600,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.738,
    modifiers: []
  },
  {
    levelNumber: 1597,
    name: 'Stage 1597',
    targetScore: 159700,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.739,
    modifiers: []
  },
  {
    levelNumber: 1598,
    name: 'Stage 1598',
    targetScore: 159800,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.739,
    modifiers: []
  },
  {
    levelNumber: 1599,
    name: 'Stage 1599',
    targetScore: 159900,
    timeLimit: 29,
    gridSize: 9,
    colorSimilarity: 0.740,
    modifiers: []
  },
  {
    levelNumber: 1600,
    name: 'Stage 1600',
    targetScore: 160000,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.740,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1601,
    name: 'Stage 1601',
    targetScore: 160100,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.740,
    modifiers: []
  },
  {
    levelNumber: 1602,
    name: 'Stage 1602',
    targetScore: 160200,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.741,
    modifiers: []
  },
  {
    levelNumber: 1603,
    name: 'Stage 1603',
    targetScore: 160300,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.741,
    modifiers: []
  },
  {
    levelNumber: 1604,
    name: 'Stage 1604',
    targetScore: 160400,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.742,
    modifiers: []
  },
  {
    levelNumber: 1605,
    name: 'Stage 1605',
    targetScore: 160500,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.742,
    modifiers: []
  },
  {
    levelNumber: 1606,
    name: 'Stage 1606',
    targetScore: 160600,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.742,
    modifiers: []
  },
  {
    levelNumber: 1607,
    name: 'Stage 1607',
    targetScore: 160700,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.743,
    modifiers: []
  },
  {
    levelNumber: 1608,
    name: 'Stage 1608',
    targetScore: 160800,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.743,
    modifiers: []
  },
  {
    levelNumber: 1609,
    name: 'Stage 1609',
    targetScore: 160900,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.744,
    modifiers: []
  },
  {
    levelNumber: 1610,
    name: 'Stage 1610',
    targetScore: 161000,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.744,
    modifiers: []
  },
  {
    levelNumber: 1611,
    name: 'Stage 1611',
    targetScore: 161100,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.744,
    modifiers: []
  },
  {
    levelNumber: 1612,
    name: 'Stage 1612',
    targetScore: 161200,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.745,
    modifiers: []
  },
  {
    levelNumber: 1613,
    name: 'Stage 1613',
    targetScore: 161300,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.745,
    modifiers: []
  },
  {
    levelNumber: 1614,
    name: 'Stage 1614',
    targetScore: 161400,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.746,
    modifiers: []
  },
  {
    levelNumber: 1615,
    name: 'Stage 1615',
    targetScore: 161500,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.746,
    modifiers: []
  },
  {
    levelNumber: 1616,
    name: 'Stage 1616',
    targetScore: 161600,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.746,
    modifiers: []
  },
  {
    levelNumber: 1617,
    name: 'Stage 1617',
    targetScore: 161700,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.747,
    modifiers: []
  },
  {
    levelNumber: 1618,
    name: 'Stage 1618',
    targetScore: 161800,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.747,
    modifiers: []
  },
  {
    levelNumber: 1619,
    name: 'Stage 1619',
    targetScore: 161900,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.748,
    modifiers: []
  },
  {
    levelNumber: 1620,
    name: 'Stage 1620',
    targetScore: 162000,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.748,
    modifiers: []
  },
  {
    levelNumber: 1621,
    name: 'Stage 1621',
    targetScore: 162100,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.748,
    modifiers: []
  },
  {
    levelNumber: 1622,
    name: 'Stage 1622',
    targetScore: 162200,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.749,
    modifiers: []
  },
  {
    levelNumber: 1623,
    name: 'Stage 1623',
    targetScore: 162300,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.749,
    modifiers: []
  },
  {
    levelNumber: 1624,
    name: 'Stage 1624',
    targetScore: 162400,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.750,
    modifiers: []
  },
  {
    levelNumber: 1625,
    name: 'Stage 1625',
    targetScore: 162500,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.750,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1626,
    name: 'Stage 1626',
    targetScore: 162600,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.750,
    modifiers: []
  },
  {
    levelNumber: 1627,
    name: 'Stage 1627',
    targetScore: 162700,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.751,
    modifiers: []
  },
  {
    levelNumber: 1628,
    name: 'Stage 1628',
    targetScore: 162800,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.751,
    modifiers: []
  },
  {
    levelNumber: 1629,
    name: 'Stage 1629',
    targetScore: 162900,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.752,
    modifiers: []
  },
  {
    levelNumber: 1630,
    name: 'Stage 1630',
    targetScore: 163000,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.752,
    modifiers: []
  },
  {
    levelNumber: 1631,
    name: 'Stage 1631',
    targetScore: 163100,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.752,
    modifiers: []
  },
  {
    levelNumber: 1632,
    name: 'Stage 1632',
    targetScore: 163200,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.753,
    modifiers: []
  },
  {
    levelNumber: 1633,
    name: 'Stage 1633',
    targetScore: 163300,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.753,
    modifiers: []
  },
  {
    levelNumber: 1634,
    name: 'Stage 1634',
    targetScore: 163400,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.754,
    modifiers: []
  },
  {
    levelNumber: 1635,
    name: 'Stage 1635',
    targetScore: 163500,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.754,
    modifiers: []
  },
  {
    levelNumber: 1636,
    name: 'Stage 1636',
    targetScore: 163600,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.754,
    modifiers: []
  },
  {
    levelNumber: 1637,
    name: 'Stage 1637',
    targetScore: 163700,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.755,
    modifiers: []
  },
  {
    levelNumber: 1638,
    name: 'Stage 1638',
    targetScore: 163800,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.755,
    modifiers: []
  },
  {
    levelNumber: 1639,
    name: 'Stage 1639',
    targetScore: 163900,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.756,
    modifiers: []
  },
  {
    levelNumber: 1640,
    name: 'Stage 1640',
    targetScore: 164000,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.756,
    modifiers: []
  },
  {
    levelNumber: 1641,
    name: 'Stage 1641',
    targetScore: 164100,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.756,
    modifiers: []
  },
  {
    levelNumber: 1642,
    name: 'Stage 1642',
    targetScore: 164200,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.757,
    modifiers: []
  },
  {
    levelNumber: 1643,
    name: 'Stage 1643',
    targetScore: 164300,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.757,
    modifiers: []
  },
  {
    levelNumber: 1644,
    name: 'Stage 1644',
    targetScore: 164400,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.758,
    modifiers: []
  },
  {
    levelNumber: 1645,
    name: 'Stage 1645',
    targetScore: 164500,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.758,
    modifiers: []
  },
  {
    levelNumber: 1646,
    name: 'Stage 1646',
    targetScore: 164600,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.758,
    modifiers: []
  },
  {
    levelNumber: 1647,
    name: 'Stage 1647',
    targetScore: 164700,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.759,
    modifiers: []
  },
  {
    levelNumber: 1648,
    name: 'Stage 1648',
    targetScore: 164800,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.759,
    modifiers: []
  },
  {
    levelNumber: 1649,
    name: 'Stage 1649',
    targetScore: 164900,
    timeLimit: 28,
    gridSize: 9,
    colorSimilarity: 0.760,
    modifiers: []
  },
  {
    levelNumber: 1650,
    name: 'Stage 1650',
    targetScore: 165000,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.760,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1651,
    name: 'Stage 1651',
    targetScore: 165100,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.760,
    modifiers: []
  },
  {
    levelNumber: 1652,
    name: 'Stage 1652',
    targetScore: 165200,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.761,
    modifiers: []
  },
  {
    levelNumber: 1653,
    name: 'Stage 1653',
    targetScore: 165300,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.761,
    modifiers: []
  },
  {
    levelNumber: 1654,
    name: 'Stage 1654',
    targetScore: 165400,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.762,
    modifiers: []
  },
  {
    levelNumber: 1655,
    name: 'Stage 1655',
    targetScore: 165500,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.762,
    modifiers: []
  },
  {
    levelNumber: 1656,
    name: 'Stage 1656',
    targetScore: 165600,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.762,
    modifiers: []
  },
  {
    levelNumber: 1657,
    name: 'Stage 1657',
    targetScore: 165700,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.763,
    modifiers: []
  },
  {
    levelNumber: 1658,
    name: 'Stage 1658',
    targetScore: 165800,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.763,
    modifiers: []
  },
  {
    levelNumber: 1659,
    name: 'Stage 1659',
    targetScore: 165900,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.764,
    modifiers: []
  },
  {
    levelNumber: 1660,
    name: 'Stage 1660',
    targetScore: 166000,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.764,
    modifiers: []
  },
  {
    levelNumber: 1661,
    name: 'Stage 1661',
    targetScore: 166100,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.764,
    modifiers: []
  },
  {
    levelNumber: 1662,
    name: 'Stage 1662',
    targetScore: 166200,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.765,
    modifiers: []
  },
  {
    levelNumber: 1663,
    name: 'Stage 1663',
    targetScore: 166300,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.765,
    modifiers: []
  },
  {
    levelNumber: 1664,
    name: 'Stage 1664',
    targetScore: 166400,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.766,
    modifiers: []
  },
  {
    levelNumber: 1665,
    name: 'Stage 1665',
    targetScore: 166500,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.766,
    modifiers: []
  },
  {
    levelNumber: 1666,
    name: 'Stage 1666',
    targetScore: 166600,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.766,
    modifiers: []
  },
  {
    levelNumber: 1667,
    name: 'Stage 1667',
    targetScore: 166700,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.767,
    modifiers: []
  },
  {
    levelNumber: 1668,
    name: 'Stage 1668',
    targetScore: 166800,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.767,
    modifiers: []
  },
  {
    levelNumber: 1669,
    name: 'Stage 1669',
    targetScore: 166900,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.768,
    modifiers: []
  },
  {
    levelNumber: 1670,
    name: 'Stage 1670',
    targetScore: 167000,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.768,
    modifiers: []
  },
  {
    levelNumber: 1671,
    name: 'Stage 1671',
    targetScore: 167100,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.768,
    modifiers: []
  },
  {
    levelNumber: 1672,
    name: 'Stage 1672',
    targetScore: 167200,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.769,
    modifiers: []
  },
  {
    levelNumber: 1673,
    name: 'Stage 1673',
    targetScore: 167300,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.769,
    modifiers: []
  },
  {
    levelNumber: 1674,
    name: 'Stage 1674',
    targetScore: 167400,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.770,
    modifiers: []
  },
  {
    levelNumber: 1675,
    name: 'Stage 1675',
    targetScore: 167500,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.770,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1676,
    name: 'Stage 1676',
    targetScore: 167600,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.770,
    modifiers: []
  },
  {
    levelNumber: 1677,
    name: 'Stage 1677',
    targetScore: 167700,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.771,
    modifiers: []
  },
  {
    levelNumber: 1678,
    name: 'Stage 1678',
    targetScore: 167800,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.771,
    modifiers: []
  },
  {
    levelNumber: 1679,
    name: 'Stage 1679',
    targetScore: 167900,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.772,
    modifiers: []
  },
  {
    levelNumber: 1680,
    name: 'Stage 1680',
    targetScore: 168000,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.772,
    modifiers: []
  },
  {
    levelNumber: 1681,
    name: 'Stage 1681',
    targetScore: 168100,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.772,
    modifiers: []
  },
  {
    levelNumber: 1682,
    name: 'Stage 1682',
    targetScore: 168200,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.773,
    modifiers: []
  },
  {
    levelNumber: 1683,
    name: 'Stage 1683',
    targetScore: 168300,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.773,
    modifiers: []
  },
  {
    levelNumber: 1684,
    name: 'Stage 1684',
    targetScore: 168400,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.774,
    modifiers: []
  },
  {
    levelNumber: 1685,
    name: 'Stage 1685',
    targetScore: 168500,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.774,
    modifiers: []
  },
  {
    levelNumber: 1686,
    name: 'Stage 1686',
    targetScore: 168600,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.774,
    modifiers: []
  },
  {
    levelNumber: 1687,
    name: 'Stage 1687',
    targetScore: 168700,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.775,
    modifiers: []
  },
  {
    levelNumber: 1688,
    name: 'Stage 1688',
    targetScore: 168800,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.775,
    modifiers: []
  },
  {
    levelNumber: 1689,
    name: 'Stage 1689',
    targetScore: 168900,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.776,
    modifiers: []
  },
  {
    levelNumber: 1690,
    name: 'Stage 1690',
    targetScore: 169000,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.776,
    modifiers: []
  },
  {
    levelNumber: 1691,
    name: 'Stage 1691',
    targetScore: 169100,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.776,
    modifiers: []
  },
  {
    levelNumber: 1692,
    name: 'Stage 1692',
    targetScore: 169200,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.777,
    modifiers: []
  },
  {
    levelNumber: 1693,
    name: 'Stage 1693',
    targetScore: 169300,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.777,
    modifiers: []
  },
  {
    levelNumber: 1694,
    name: 'Stage 1694',
    targetScore: 169400,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.778,
    modifiers: []
  },
  {
    levelNumber: 1695,
    name: 'Stage 1695',
    targetScore: 169500,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.778,
    modifiers: []
  },
  {
    levelNumber: 1696,
    name: 'Stage 1696',
    targetScore: 169600,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.778,
    modifiers: []
  },
  {
    levelNumber: 1697,
    name: 'Stage 1697',
    targetScore: 169700,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.779,
    modifiers: []
  },
  {
    levelNumber: 1698,
    name: 'Stage 1698',
    targetScore: 169800,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.779,
    modifiers: []
  },
  {
    levelNumber: 1699,
    name: 'Stage 1699',
    targetScore: 169900,
    timeLimit: 27,
    gridSize: 9,
    colorSimilarity: 0.780,
    modifiers: []
  },
  {
    levelNumber: 1700,
    name: 'Stage 1700',
    targetScore: 170000,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.780,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1701,
    name: 'Stage 1701',
    targetScore: 170100,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.780,
    modifiers: []
  },
  {
    levelNumber: 1702,
    name: 'Stage 1702',
    targetScore: 170200,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.781,
    modifiers: []
  },
  {
    levelNumber: 1703,
    name: 'Stage 1703',
    targetScore: 170300,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.781,
    modifiers: []
  },
  {
    levelNumber: 1704,
    name: 'Stage 1704',
    targetScore: 170400,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.782,
    modifiers: []
  },
  {
    levelNumber: 1705,
    name: 'Stage 1705',
    targetScore: 170500,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.782,
    modifiers: []
  },
  {
    levelNumber: 1706,
    name: 'Stage 1706',
    targetScore: 170600,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.782,
    modifiers: []
  },
  {
    levelNumber: 1707,
    name: 'Stage 1707',
    targetScore: 170700,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.783,
    modifiers: []
  },
  {
    levelNumber: 1708,
    name: 'Stage 1708',
    targetScore: 170800,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.783,
    modifiers: []
  },
  {
    levelNumber: 1709,
    name: 'Stage 1709',
    targetScore: 170900,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.784,
    modifiers: []
  },
  {
    levelNumber: 1710,
    name: 'Stage 1710',
    targetScore: 171000,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.784,
    modifiers: []
  },
  {
    levelNumber: 1711,
    name: 'Stage 1711',
    targetScore: 171100,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.784,
    modifiers: []
  },
  {
    levelNumber: 1712,
    name: 'Stage 1712',
    targetScore: 171200,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.785,
    modifiers: []
  },
  {
    levelNumber: 1713,
    name: 'Stage 1713',
    targetScore: 171300,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.785,
    modifiers: []
  },
  {
    levelNumber: 1714,
    name: 'Stage 1714',
    targetScore: 171400,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.786,
    modifiers: []
  },
  {
    levelNumber: 1715,
    name: 'Stage 1715',
    targetScore: 171500,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.786,
    modifiers: []
  },
  {
    levelNumber: 1716,
    name: 'Stage 1716',
    targetScore: 171600,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.786,
    modifiers: []
  },
  {
    levelNumber: 1717,
    name: 'Stage 1717',
    targetScore: 171700,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.787,
    modifiers: []
  },
  {
    levelNumber: 1718,
    name: 'Stage 1718',
    targetScore: 171800,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.787,
    modifiers: []
  },
  {
    levelNumber: 1719,
    name: 'Stage 1719',
    targetScore: 171900,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.788,
    modifiers: []
  },
  {
    levelNumber: 1720,
    name: 'Stage 1720',
    targetScore: 172000,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.788,
    modifiers: []
  },
  {
    levelNumber: 1721,
    name: 'Stage 1721',
    targetScore: 172100,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.788,
    modifiers: []
  },
  {
    levelNumber: 1722,
    name: 'Stage 1722',
    targetScore: 172200,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.789,
    modifiers: []
  },
  {
    levelNumber: 1723,
    name: 'Stage 1723',
    targetScore: 172300,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.789,
    modifiers: []
  },
  {
    levelNumber: 1724,
    name: 'Stage 1724',
    targetScore: 172400,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.790,
    modifiers: []
  },
  {
    levelNumber: 1725,
    name: 'Stage 1725',
    targetScore: 172500,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.790,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1726,
    name: 'Stage 1726',
    targetScore: 172600,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.790,
    modifiers: []
  },
  {
    levelNumber: 1727,
    name: 'Stage 1727',
    targetScore: 172700,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.791,
    modifiers: []
  },
  {
    levelNumber: 1728,
    name: 'Stage 1728',
    targetScore: 172800,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.791,
    modifiers: []
  },
  {
    levelNumber: 1729,
    name: 'Stage 1729',
    targetScore: 172900,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.792,
    modifiers: []
  },
  {
    levelNumber: 1730,
    name: 'Stage 1730',
    targetScore: 173000,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.792,
    modifiers: []
  },
  {
    levelNumber: 1731,
    name: 'Stage 1731',
    targetScore: 173100,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.792,
    modifiers: []
  },
  {
    levelNumber: 1732,
    name: 'Stage 1732',
    targetScore: 173200,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.793,
    modifiers: []
  },
  {
    levelNumber: 1733,
    name: 'Stage 1733',
    targetScore: 173300,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.793,
    modifiers: []
  },
  {
    levelNumber: 1734,
    name: 'Stage 1734',
    targetScore: 173400,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.794,
    modifiers: []
  },
  {
    levelNumber: 1735,
    name: 'Stage 1735',
    targetScore: 173500,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.794,
    modifiers: []
  },
  {
    levelNumber: 1736,
    name: 'Stage 1736',
    targetScore: 173600,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.794,
    modifiers: []
  },
  {
    levelNumber: 1737,
    name: 'Stage 1737',
    targetScore: 173700,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.795,
    modifiers: []
  },
  {
    levelNumber: 1738,
    name: 'Stage 1738',
    targetScore: 173800,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.795,
    modifiers: []
  },
  {
    levelNumber: 1739,
    name: 'Stage 1739',
    targetScore: 173900,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.796,
    modifiers: []
  },
  {
    levelNumber: 1740,
    name: 'Stage 1740',
    targetScore: 174000,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.796,
    modifiers: []
  },
  {
    levelNumber: 1741,
    name: 'Stage 1741',
    targetScore: 174100,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.796,
    modifiers: []
  },
  {
    levelNumber: 1742,
    name: 'Stage 1742',
    targetScore: 174200,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.797,
    modifiers: []
  },
  {
    levelNumber: 1743,
    name: 'Stage 1743',
    targetScore: 174300,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.797,
    modifiers: []
  },
  {
    levelNumber: 1744,
    name: 'Stage 1744',
    targetScore: 174400,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.798,
    modifiers: []
  },
  {
    levelNumber: 1745,
    name: 'Stage 1745',
    targetScore: 174500,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.798,
    modifiers: []
  },
  {
    levelNumber: 1746,
    name: 'Stage 1746',
    targetScore: 174600,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.798,
    modifiers: []
  },
  {
    levelNumber: 1747,
    name: 'Stage 1747',
    targetScore: 174700,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.799,
    modifiers: []
  },
  {
    levelNumber: 1748,
    name: 'Stage 1748',
    targetScore: 174800,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.799,
    modifiers: []
  },
  {
    levelNumber: 1749,
    name: 'Stage 1749',
    targetScore: 174900,
    timeLimit: 26,
    gridSize: 9,
    colorSimilarity: 0.800,
    modifiers: []
  },
  {
    levelNumber: 1750,
    name: 'Stage 1750',
    targetScore: 175000,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.800,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1751,
    name: 'Stage 1751',
    targetScore: 175100,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.800,
    modifiers: []
  },
  {
    levelNumber: 1752,
    name: 'Stage 1752',
    targetScore: 175200,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.801,
    modifiers: []
  },
  {
    levelNumber: 1753,
    name: 'Stage 1753',
    targetScore: 175300,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.801,
    modifiers: []
  },
  {
    levelNumber: 1754,
    name: 'Stage 1754',
    targetScore: 175400,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.802,
    modifiers: []
  },
  {
    levelNumber: 1755,
    name: 'Stage 1755',
    targetScore: 175500,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.802,
    modifiers: []
  },
  {
    levelNumber: 1756,
    name: 'Stage 1756',
    targetScore: 175600,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.802,
    modifiers: []
  },
  {
    levelNumber: 1757,
    name: 'Stage 1757',
    targetScore: 175700,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.803,
    modifiers: []
  },
  {
    levelNumber: 1758,
    name: 'Stage 1758',
    targetScore: 175800,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.803,
    modifiers: []
  },
  {
    levelNumber: 1759,
    name: 'Stage 1759',
    targetScore: 175900,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.804,
    modifiers: []
  },
  {
    levelNumber: 1760,
    name: 'Stage 1760',
    targetScore: 176000,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.804,
    modifiers: []
  },
  {
    levelNumber: 1761,
    name: 'Stage 1761',
    targetScore: 176100,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.804,
    modifiers: []
  },
  {
    levelNumber: 1762,
    name: 'Stage 1762',
    targetScore: 176200,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.805,
    modifiers: []
  },
  {
    levelNumber: 1763,
    name: 'Stage 1763',
    targetScore: 176300,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.805,
    modifiers: []
  },
  {
    levelNumber: 1764,
    name: 'Stage 1764',
    targetScore: 176400,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.806,
    modifiers: []
  },
  {
    levelNumber: 1765,
    name: 'Stage 1765',
    targetScore: 176500,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.806,
    modifiers: []
  },
  {
    levelNumber: 1766,
    name: 'Stage 1766',
    targetScore: 176600,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.806,
    modifiers: []
  },
  {
    levelNumber: 1767,
    name: 'Stage 1767',
    targetScore: 176700,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.807,
    modifiers: []
  },
  {
    levelNumber: 1768,
    name: 'Stage 1768',
    targetScore: 176800,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.807,
    modifiers: []
  },
  {
    levelNumber: 1769,
    name: 'Stage 1769',
    targetScore: 176900,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.808,
    modifiers: []
  },
  {
    levelNumber: 1770,
    name: 'Stage 1770',
    targetScore: 177000,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.808,
    modifiers: []
  },
  {
    levelNumber: 1771,
    name: 'Stage 1771',
    targetScore: 177100,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.808,
    modifiers: []
  },
  {
    levelNumber: 1772,
    name: 'Stage 1772',
    targetScore: 177200,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.809,
    modifiers: []
  },
  {
    levelNumber: 1773,
    name: 'Stage 1773',
    targetScore: 177300,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.809,
    modifiers: []
  },
  {
    levelNumber: 1774,
    name: 'Stage 1774',
    targetScore: 177400,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.810,
    modifiers: []
  },
  {
    levelNumber: 1775,
    name: 'Stage 1775',
    targetScore: 177500,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.810,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1776,
    name: 'Stage 1776',
    targetScore: 177600,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.810,
    modifiers: []
  },
  {
    levelNumber: 1777,
    name: 'Stage 1777',
    targetScore: 177700,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.811,
    modifiers: []
  },
  {
    levelNumber: 1778,
    name: 'Stage 1778',
    targetScore: 177800,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.811,
    modifiers: []
  },
  {
    levelNumber: 1779,
    name: 'Stage 1779',
    targetScore: 177900,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.812,
    modifiers: []
  },
  {
    levelNumber: 1780,
    name: 'Stage 1780',
    targetScore: 178000,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.812,
    modifiers: []
  },
  {
    levelNumber: 1781,
    name: 'Stage 1781',
    targetScore: 178100,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.812,
    modifiers: []
  },
  {
    levelNumber: 1782,
    name: 'Stage 1782',
    targetScore: 178200,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.813,
    modifiers: []
  },
  {
    levelNumber: 1783,
    name: 'Stage 1783',
    targetScore: 178300,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.813,
    modifiers: []
  },
  {
    levelNumber: 1784,
    name: 'Stage 1784',
    targetScore: 178400,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.814,
    modifiers: []
  },
  {
    levelNumber: 1785,
    name: 'Stage 1785',
    targetScore: 178500,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.814,
    modifiers: []
  },
  {
    levelNumber: 1786,
    name: 'Stage 1786',
    targetScore: 178600,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.814,
    modifiers: []
  },
  {
    levelNumber: 1787,
    name: 'Stage 1787',
    targetScore: 178700,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.815,
    modifiers: []
  },
  {
    levelNumber: 1788,
    name: 'Stage 1788',
    targetScore: 178800,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.815,
    modifiers: []
  },
  {
    levelNumber: 1789,
    name: 'Stage 1789',
    targetScore: 178900,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.816,
    modifiers: []
  },
  {
    levelNumber: 1790,
    name: 'Stage 1790',
    targetScore: 179000,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.816,
    modifiers: []
  },
  {
    levelNumber: 1791,
    name: 'Stage 1791',
    targetScore: 179100,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.816,
    modifiers: []
  },
  {
    levelNumber: 1792,
    name: 'Stage 1792',
    targetScore: 179200,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.817,
    modifiers: []
  },
  {
    levelNumber: 1793,
    name: 'Stage 1793',
    targetScore: 179300,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.817,
    modifiers: []
  },
  {
    levelNumber: 1794,
    name: 'Stage 1794',
    targetScore: 179400,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.818,
    modifiers: []
  },
  {
    levelNumber: 1795,
    name: 'Stage 1795',
    targetScore: 179500,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.818,
    modifiers: []
  },
  {
    levelNumber: 1796,
    name: 'Stage 1796',
    targetScore: 179600,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.818,
    modifiers: []
  },
  {
    levelNumber: 1797,
    name: 'Stage 1797',
    targetScore: 179700,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.819,
    modifiers: []
  },
  {
    levelNumber: 1798,
    name: 'Stage 1798',
    targetScore: 179800,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.819,
    modifiers: []
  },
  {
    levelNumber: 1799,
    name: 'Stage 1799',
    targetScore: 179900,
    timeLimit: 25,
    gridSize: 9,
    colorSimilarity: 0.820,
    modifiers: []
  },
  {
    levelNumber: 1800,
    name: 'Stage 1800',
    targetScore: 180000,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.820,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1801,
    name: 'Stage 1801',
    targetScore: 180100,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.820,
    modifiers: []
  },
  {
    levelNumber: 1802,
    name: 'Stage 1802',
    targetScore: 180200,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.821,
    modifiers: []
  },
  {
    levelNumber: 1803,
    name: 'Stage 1803',
    targetScore: 180300,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.821,
    modifiers: []
  },
  {
    levelNumber: 1804,
    name: 'Stage 1804',
    targetScore: 180400,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.822,
    modifiers: []
  },
  {
    levelNumber: 1805,
    name: 'Stage 1805',
    targetScore: 180500,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.822,
    modifiers: []
  },
  {
    levelNumber: 1806,
    name: 'Stage 1806',
    targetScore: 180600,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.822,
    modifiers: []
  },
  {
    levelNumber: 1807,
    name: 'Stage 1807',
    targetScore: 180700,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.823,
    modifiers: []
  },
  {
    levelNumber: 1808,
    name: 'Stage 1808',
    targetScore: 180800,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.823,
    modifiers: []
  },
  {
    levelNumber: 1809,
    name: 'Stage 1809',
    targetScore: 180900,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.824,
    modifiers: []
  },
  {
    levelNumber: 1810,
    name: 'Stage 1810',
    targetScore: 181000,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.824,
    modifiers: []
  },
  {
    levelNumber: 1811,
    name: 'Stage 1811',
    targetScore: 181100,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.824,
    modifiers: []
  },
  {
    levelNumber: 1812,
    name: 'Stage 1812',
    targetScore: 181200,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.825,
    modifiers: []
  },
  {
    levelNumber: 1813,
    name: 'Stage 1813',
    targetScore: 181300,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.825,
    modifiers: []
  },
  {
    levelNumber: 1814,
    name: 'Stage 1814',
    targetScore: 181400,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.826,
    modifiers: []
  },
  {
    levelNumber: 1815,
    name: 'Stage 1815',
    targetScore: 181500,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.826,
    modifiers: []
  },
  {
    levelNumber: 1816,
    name: 'Stage 1816',
    targetScore: 181600,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.826,
    modifiers: []
  },
  {
    levelNumber: 1817,
    name: 'Stage 1817',
    targetScore: 181700,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.827,
    modifiers: []
  },
  {
    levelNumber: 1818,
    name: 'Stage 1818',
    targetScore: 181800,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.827,
    modifiers: []
  },
  {
    levelNumber: 1819,
    name: 'Stage 1819',
    targetScore: 181900,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.828,
    modifiers: []
  },
  {
    levelNumber: 1820,
    name: 'Stage 1820',
    targetScore: 182000,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.828,
    modifiers: []
  },
  {
    levelNumber: 1821,
    name: 'Stage 1821',
    targetScore: 182100,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.828,
    modifiers: []
  },
  {
    levelNumber: 1822,
    name: 'Stage 1822',
    targetScore: 182200,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.829,
    modifiers: []
  },
  {
    levelNumber: 1823,
    name: 'Stage 1823',
    targetScore: 182300,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.829,
    modifiers: []
  },
  {
    levelNumber: 1824,
    name: 'Stage 1824',
    targetScore: 182400,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.830,
    modifiers: []
  },
  {
    levelNumber: 1825,
    name: 'Stage 1825',
    targetScore: 182500,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.830,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1826,
    name: 'Stage 1826',
    targetScore: 182600,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.830,
    modifiers: []
  },
  {
    levelNumber: 1827,
    name: 'Stage 1827',
    targetScore: 182700,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.831,
    modifiers: []
  },
  {
    levelNumber: 1828,
    name: 'Stage 1828',
    targetScore: 182800,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.831,
    modifiers: []
  },
  {
    levelNumber: 1829,
    name: 'Stage 1829',
    targetScore: 182900,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.832,
    modifiers: []
  },
  {
    levelNumber: 1830,
    name: 'Stage 1830',
    targetScore: 183000,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.832,
    modifiers: []
  },
  {
    levelNumber: 1831,
    name: 'Stage 1831',
    targetScore: 183100,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.832,
    modifiers: []
  },
  {
    levelNumber: 1832,
    name: 'Stage 1832',
    targetScore: 183200,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.833,
    modifiers: []
  },
  {
    levelNumber: 1833,
    name: 'Stage 1833',
    targetScore: 183300,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.833,
    modifiers: []
  },
  {
    levelNumber: 1834,
    name: 'Stage 1834',
    targetScore: 183400,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.834,
    modifiers: []
  },
  {
    levelNumber: 1835,
    name: 'Stage 1835',
    targetScore: 183500,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.834,
    modifiers: []
  },
  {
    levelNumber: 1836,
    name: 'Stage 1836',
    targetScore: 183600,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.834,
    modifiers: []
  },
  {
    levelNumber: 1837,
    name: 'Stage 1837',
    targetScore: 183700,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.835,
    modifiers: []
  },
  {
    levelNumber: 1838,
    name: 'Stage 1838',
    targetScore: 183800,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.835,
    modifiers: []
  },
  {
    levelNumber: 1839,
    name: 'Stage 1839',
    targetScore: 183900,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.836,
    modifiers: []
  },
  {
    levelNumber: 1840,
    name: 'Stage 1840',
    targetScore: 184000,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.836,
    modifiers: []
  },
  {
    levelNumber: 1841,
    name: 'Stage 1841',
    targetScore: 184100,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.836,
    modifiers: []
  },
  {
    levelNumber: 1842,
    name: 'Stage 1842',
    targetScore: 184200,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.837,
    modifiers: []
  },
  {
    levelNumber: 1843,
    name: 'Stage 1843',
    targetScore: 184300,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.837,
    modifiers: []
  },
  {
    levelNumber: 1844,
    name: 'Stage 1844',
    targetScore: 184400,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.838,
    modifiers: []
  },
  {
    levelNumber: 1845,
    name: 'Stage 1845',
    targetScore: 184500,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.838,
    modifiers: []
  },
  {
    levelNumber: 1846,
    name: 'Stage 1846',
    targetScore: 184600,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.838,
    modifiers: []
  },
  {
    levelNumber: 1847,
    name: 'Stage 1847',
    targetScore: 184700,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.839,
    modifiers: []
  },
  {
    levelNumber: 1848,
    name: 'Stage 1848',
    targetScore: 184800,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.839,
    modifiers: []
  },
  {
    levelNumber: 1849,
    name: 'Stage 1849',
    targetScore: 184900,
    timeLimit: 24,
    gridSize: 9,
    colorSimilarity: 0.840,
    modifiers: []
  },
  {
    levelNumber: 1850,
    name: 'Stage 1850',
    targetScore: 185000,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.840,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1851,
    name: 'Stage 1851',
    targetScore: 185100,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.840,
    modifiers: []
  },
  {
    levelNumber: 1852,
    name: 'Stage 1852',
    targetScore: 185200,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.841,
    modifiers: []
  },
  {
    levelNumber: 1853,
    name: 'Stage 1853',
    targetScore: 185300,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.841,
    modifiers: []
  },
  {
    levelNumber: 1854,
    name: 'Stage 1854',
    targetScore: 185400,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.842,
    modifiers: []
  },
  {
    levelNumber: 1855,
    name: 'Stage 1855',
    targetScore: 185500,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.842,
    modifiers: []
  },
  {
    levelNumber: 1856,
    name: 'Stage 1856',
    targetScore: 185600,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.842,
    modifiers: []
  },
  {
    levelNumber: 1857,
    name: 'Stage 1857',
    targetScore: 185700,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.843,
    modifiers: []
  },
  {
    levelNumber: 1858,
    name: 'Stage 1858',
    targetScore: 185800,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.843,
    modifiers: []
  },
  {
    levelNumber: 1859,
    name: 'Stage 1859',
    targetScore: 185900,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.844,
    modifiers: []
  },
  {
    levelNumber: 1860,
    name: 'Stage 1860',
    targetScore: 186000,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.844,
    modifiers: []
  },
  {
    levelNumber: 1861,
    name: 'Stage 1861',
    targetScore: 186100,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.844,
    modifiers: []
  },
  {
    levelNumber: 1862,
    name: 'Stage 1862',
    targetScore: 186200,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.845,
    modifiers: []
  },
  {
    levelNumber: 1863,
    name: 'Stage 1863',
    targetScore: 186300,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.845,
    modifiers: []
  },
  {
    levelNumber: 1864,
    name: 'Stage 1864',
    targetScore: 186400,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.846,
    modifiers: []
  },
  {
    levelNumber: 1865,
    name: 'Stage 1865',
    targetScore: 186500,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.846,
    modifiers: []
  },
  {
    levelNumber: 1866,
    name: 'Stage 1866',
    targetScore: 186600,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.846,
    modifiers: []
  },
  {
    levelNumber: 1867,
    name: 'Stage 1867',
    targetScore: 186700,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.847,
    modifiers: []
  },
  {
    levelNumber: 1868,
    name: 'Stage 1868',
    targetScore: 186800,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.847,
    modifiers: []
  },
  {
    levelNumber: 1869,
    name: 'Stage 1869',
    targetScore: 186900,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.848,
    modifiers: []
  },
  {
    levelNumber: 1870,
    name: 'Stage 1870',
    targetScore: 187000,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.848,
    modifiers: []
  },
  {
    levelNumber: 1871,
    name: 'Stage 1871',
    targetScore: 187100,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.848,
    modifiers: []
  },
  {
    levelNumber: 1872,
    name: 'Stage 1872',
    targetScore: 187200,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.849,
    modifiers: []
  },
  {
    levelNumber: 1873,
    name: 'Stage 1873',
    targetScore: 187300,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.849,
    modifiers: []
  },
  {
    levelNumber: 1874,
    name: 'Stage 1874',
    targetScore: 187400,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.850,
    modifiers: []
  },
  {
    levelNumber: 1875,
    name: 'Stage 1875',
    targetScore: 187500,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.850,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1876,
    name: 'Stage 1876',
    targetScore: 187600,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.850,
    modifiers: []
  },
  {
    levelNumber: 1877,
    name: 'Stage 1877',
    targetScore: 187700,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.851,
    modifiers: []
  },
  {
    levelNumber: 1878,
    name: 'Stage 1878',
    targetScore: 187800,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.851,
    modifiers: []
  },
  {
    levelNumber: 1879,
    name: 'Stage 1879',
    targetScore: 187900,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.852,
    modifiers: []
  },
  {
    levelNumber: 1880,
    name: 'Stage 1880',
    targetScore: 188000,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.852,
    modifiers: []
  },
  {
    levelNumber: 1881,
    name: 'Stage 1881',
    targetScore: 188100,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.852,
    modifiers: []
  },
  {
    levelNumber: 1882,
    name: 'Stage 1882',
    targetScore: 188200,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.853,
    modifiers: []
  },
  {
    levelNumber: 1883,
    name: 'Stage 1883',
    targetScore: 188300,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.853,
    modifiers: []
  },
  {
    levelNumber: 1884,
    name: 'Stage 1884',
    targetScore: 188400,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.854,
    modifiers: []
  },
  {
    levelNumber: 1885,
    name: 'Stage 1885',
    targetScore: 188500,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.854,
    modifiers: []
  },
  {
    levelNumber: 1886,
    name: 'Stage 1886',
    targetScore: 188600,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.854,
    modifiers: []
  },
  {
    levelNumber: 1887,
    name: 'Stage 1887',
    targetScore: 188700,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.855,
    modifiers: []
  },
  {
    levelNumber: 1888,
    name: 'Stage 1888',
    targetScore: 188800,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.855,
    modifiers: []
  },
  {
    levelNumber: 1889,
    name: 'Stage 1889',
    targetScore: 188900,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.856,
    modifiers: []
  },
  {
    levelNumber: 1890,
    name: 'Stage 1890',
    targetScore: 189000,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.856,
    modifiers: []
  },
  {
    levelNumber: 1891,
    name: 'Stage 1891',
    targetScore: 189100,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.856,
    modifiers: []
  },
  {
    levelNumber: 1892,
    name: 'Stage 1892',
    targetScore: 189200,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.857,
    modifiers: []
  },
  {
    levelNumber: 1893,
    name: 'Stage 1893',
    targetScore: 189300,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.857,
    modifiers: []
  },
  {
    levelNumber: 1894,
    name: 'Stage 1894',
    targetScore: 189400,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.858,
    modifiers: []
  },
  {
    levelNumber: 1895,
    name: 'Stage 1895',
    targetScore: 189500,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.858,
    modifiers: []
  },
  {
    levelNumber: 1896,
    name: 'Stage 1896',
    targetScore: 189600,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.858,
    modifiers: []
  },
  {
    levelNumber: 1897,
    name: 'Stage 1897',
    targetScore: 189700,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.859,
    modifiers: []
  },
  {
    levelNumber: 1898,
    name: 'Stage 1898',
    targetScore: 189800,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.859,
    modifiers: []
  },
  {
    levelNumber: 1899,
    name: 'Stage 1899',
    targetScore: 189900,
    timeLimit: 23,
    gridSize: 9,
    colorSimilarity: 0.860,
    modifiers: []
  },
  {
    levelNumber: 1900,
    name: 'Stage 1900',
    targetScore: 190000,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.860,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1901,
    name: 'Stage 1901',
    targetScore: 190100,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.860,
    modifiers: []
  },
  {
    levelNumber: 1902,
    name: 'Stage 1902',
    targetScore: 190200,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.861,
    modifiers: []
  },
  {
    levelNumber: 1903,
    name: 'Stage 1903',
    targetScore: 190300,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.861,
    modifiers: []
  },
  {
    levelNumber: 1904,
    name: 'Stage 1904',
    targetScore: 190400,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.862,
    modifiers: []
  },
  {
    levelNumber: 1905,
    name: 'Stage 1905',
    targetScore: 190500,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.862,
    modifiers: []
  },
  {
    levelNumber: 1906,
    name: 'Stage 1906',
    targetScore: 190600,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.862,
    modifiers: []
  },
  {
    levelNumber: 1907,
    name: 'Stage 1907',
    targetScore: 190700,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.863,
    modifiers: []
  },
  {
    levelNumber: 1908,
    name: 'Stage 1908',
    targetScore: 190800,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.863,
    modifiers: []
  },
  {
    levelNumber: 1909,
    name: 'Stage 1909',
    targetScore: 190900,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.864,
    modifiers: []
  },
  {
    levelNumber: 1910,
    name: 'Stage 1910',
    targetScore: 191000,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.864,
    modifiers: []
  },
  {
    levelNumber: 1911,
    name: 'Stage 1911',
    targetScore: 191100,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.864,
    modifiers: []
  },
  {
    levelNumber: 1912,
    name: 'Stage 1912',
    targetScore: 191200,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.865,
    modifiers: []
  },
  {
    levelNumber: 1913,
    name: 'Stage 1913',
    targetScore: 191300,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.865,
    modifiers: []
  },
  {
    levelNumber: 1914,
    name: 'Stage 1914',
    targetScore: 191400,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.866,
    modifiers: []
  },
  {
    levelNumber: 1915,
    name: 'Stage 1915',
    targetScore: 191500,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.866,
    modifiers: []
  },
  {
    levelNumber: 1916,
    name: 'Stage 1916',
    targetScore: 191600,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.866,
    modifiers: []
  },
  {
    levelNumber: 1917,
    name: 'Stage 1917',
    targetScore: 191700,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.867,
    modifiers: []
  },
  {
    levelNumber: 1918,
    name: 'Stage 1918',
    targetScore: 191800,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.867,
    modifiers: []
  },
  {
    levelNumber: 1919,
    name: 'Stage 1919',
    targetScore: 191900,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.868,
    modifiers: []
  },
  {
    levelNumber: 1920,
    name: 'Stage 1920',
    targetScore: 192000,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.868,
    modifiers: []
  },
  {
    levelNumber: 1921,
    name: 'Stage 1921',
    targetScore: 192100,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.868,
    modifiers: []
  },
  {
    levelNumber: 1922,
    name: 'Stage 1922',
    targetScore: 192200,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.869,
    modifiers: []
  },
  {
    levelNumber: 1923,
    name: 'Stage 1923',
    targetScore: 192300,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.869,
    modifiers: []
  },
  {
    levelNumber: 1924,
    name: 'Stage 1924',
    targetScore: 192400,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.870,
    modifiers: []
  },
  {
    levelNumber: 1925,
    name: 'Stage 1925',
    targetScore: 192500,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.870,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1926,
    name: 'Stage 1926',
    targetScore: 192600,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.870,
    modifiers: []
  },
  {
    levelNumber: 1927,
    name: 'Stage 1927',
    targetScore: 192700,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.871,
    modifiers: []
  },
  {
    levelNumber: 1928,
    name: 'Stage 1928',
    targetScore: 192800,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.871,
    modifiers: []
  },
  {
    levelNumber: 1929,
    name: 'Stage 1929',
    targetScore: 192900,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.872,
    modifiers: []
  },
  {
    levelNumber: 1930,
    name: 'Stage 1930',
    targetScore: 193000,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.872,
    modifiers: []
  },
  {
    levelNumber: 1931,
    name: 'Stage 1931',
    targetScore: 193100,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.872,
    modifiers: []
  },
  {
    levelNumber: 1932,
    name: 'Stage 1932',
    targetScore: 193200,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.873,
    modifiers: []
  },
  {
    levelNumber: 1933,
    name: 'Stage 1933',
    targetScore: 193300,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.873,
    modifiers: []
  },
  {
    levelNumber: 1934,
    name: 'Stage 1934',
    targetScore: 193400,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.874,
    modifiers: []
  },
  {
    levelNumber: 1935,
    name: 'Stage 1935',
    targetScore: 193500,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.874,
    modifiers: []
  },
  {
    levelNumber: 1936,
    name: 'Stage 1936',
    targetScore: 193600,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.874,
    modifiers: []
  },
  {
    levelNumber: 1937,
    name: 'Stage 1937',
    targetScore: 193700,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.875,
    modifiers: []
  },
  {
    levelNumber: 1938,
    name: 'Stage 1938',
    targetScore: 193800,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.875,
    modifiers: []
  },
  {
    levelNumber: 1939,
    name: 'Stage 1939',
    targetScore: 193900,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.876,
    modifiers: []
  },
  {
    levelNumber: 1940,
    name: 'Stage 1940',
    targetScore: 194000,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.876,
    modifiers: []
  },
  {
    levelNumber: 1941,
    name: 'Stage 1941',
    targetScore: 194100,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.876,
    modifiers: []
  },
  {
    levelNumber: 1942,
    name: 'Stage 1942',
    targetScore: 194200,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.877,
    modifiers: []
  },
  {
    levelNumber: 1943,
    name: 'Stage 1943',
    targetScore: 194300,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.877,
    modifiers: []
  },
  {
    levelNumber: 1944,
    name: 'Stage 1944',
    targetScore: 194400,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.878,
    modifiers: []
  },
  {
    levelNumber: 1945,
    name: 'Stage 1945',
    targetScore: 194500,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.878,
    modifiers: []
  },
  {
    levelNumber: 1946,
    name: 'Stage 1946',
    targetScore: 194600,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.878,
    modifiers: []
  },
  {
    levelNumber: 1947,
    name: 'Stage 1947',
    targetScore: 194700,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.879,
    modifiers: []
  },
  {
    levelNumber: 1948,
    name: 'Stage 1948',
    targetScore: 194800,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.879,
    modifiers: []
  },
  {
    levelNumber: 1949,
    name: 'Stage 1949',
    targetScore: 194900,
    timeLimit: 22,
    gridSize: 9,
    colorSimilarity: 0.880,
    modifiers: []
  },
  {
    levelNumber: 1950,
    name: 'Stage 1950',
    targetScore: 195000,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.880,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1951,
    name: 'Stage 1951',
    targetScore: 195100,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.880,
    modifiers: []
  },
  {
    levelNumber: 1952,
    name: 'Stage 1952',
    targetScore: 195200,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.881,
    modifiers: []
  },
  {
    levelNumber: 1953,
    name: 'Stage 1953',
    targetScore: 195300,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.881,
    modifiers: []
  },
  {
    levelNumber: 1954,
    name: 'Stage 1954',
    targetScore: 195400,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.882,
    modifiers: []
  },
  {
    levelNumber: 1955,
    name: 'Stage 1955',
    targetScore: 195500,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.882,
    modifiers: []
  },
  {
    levelNumber: 1956,
    name: 'Stage 1956',
    targetScore: 195600,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.882,
    modifiers: []
  },
  {
    levelNumber: 1957,
    name: 'Stage 1957',
    targetScore: 195700,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.883,
    modifiers: []
  },
  {
    levelNumber: 1958,
    name: 'Stage 1958',
    targetScore: 195800,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.883,
    modifiers: []
  },
  {
    levelNumber: 1959,
    name: 'Stage 1959',
    targetScore: 195900,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.884,
    modifiers: []
  },
  {
    levelNumber: 1960,
    name: 'Stage 1960',
    targetScore: 196000,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.884,
    modifiers: []
  },
  {
    levelNumber: 1961,
    name: 'Stage 1961',
    targetScore: 196100,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.884,
    modifiers: []
  },
  {
    levelNumber: 1962,
    name: 'Stage 1962',
    targetScore: 196200,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.885,
    modifiers: []
  },
  {
    levelNumber: 1963,
    name: 'Stage 1963',
    targetScore: 196300,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.885,
    modifiers: []
  },
  {
    levelNumber: 1964,
    name: 'Stage 1964',
    targetScore: 196400,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.886,
    modifiers: []
  },
  {
    levelNumber: 1965,
    name: 'Stage 1965',
    targetScore: 196500,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.886,
    modifiers: []
  },
  {
    levelNumber: 1966,
    name: 'Stage 1966',
    targetScore: 196600,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.886,
    modifiers: []
  },
  {
    levelNumber: 1967,
    name: 'Stage 1967',
    targetScore: 196700,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.887,
    modifiers: []
  },
  {
    levelNumber: 1968,
    name: 'Stage 1968',
    targetScore: 196800,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.887,
    modifiers: []
  },
  {
    levelNumber: 1969,
    name: 'Stage 1969',
    targetScore: 196900,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.888,
    modifiers: []
  },
  {
    levelNumber: 1970,
    name: 'Stage 1970',
    targetScore: 197000,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.888,
    modifiers: []
  },
  {
    levelNumber: 1971,
    name: 'Stage 1971',
    targetScore: 197100,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.888,
    modifiers: []
  },
  {
    levelNumber: 1972,
    name: 'Stage 1972',
    targetScore: 197200,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.889,
    modifiers: []
  },
  {
    levelNumber: 1973,
    name: 'Stage 1973',
    targetScore: 197300,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.889,
    modifiers: []
  },
  {
    levelNumber: 1974,
    name: 'Stage 1974',
    targetScore: 197400,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.890,
    modifiers: []
  },
  {
    levelNumber: 1975,
    name: 'Stage 1975',
    targetScore: 197500,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.890,
    modifiers: ['stroop', 'moving']
  },
  {
    levelNumber: 1976,
    name: 'Stage 1976',
    targetScore: 197600,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.890,
    modifiers: []
  },
  {
    levelNumber: 1977,
    name: 'Stage 1977',
    targetScore: 197700,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.891,
    modifiers: []
  },
  {
    levelNumber: 1978,
    name: 'Stage 1978',
    targetScore: 197800,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.891,
    modifiers: []
  },
  {
    levelNumber: 1979,
    name: 'Stage 1979',
    targetScore: 197900,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.892,
    modifiers: []
  },
  {
    levelNumber: 1980,
    name: 'Stage 1980',
    targetScore: 198000,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.892,
    modifiers: []
  },
  {
    levelNumber: 1981,
    name: 'Stage 1981',
    targetScore: 198100,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.892,
    modifiers: []
  },
  {
    levelNumber: 1982,
    name: 'Stage 1982',
    targetScore: 198200,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.893,
    modifiers: []
  },
  {
    levelNumber: 1983,
    name: 'Stage 1983',
    targetScore: 198300,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.893,
    modifiers: []
  },
  {
    levelNumber: 1984,
    name: 'Stage 1984',
    targetScore: 198400,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.894,
    modifiers: []
  },
  {
    levelNumber: 1985,
    name: 'Stage 1985',
    targetScore: 198500,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.894,
    modifiers: []
  },
  {
    levelNumber: 1986,
    name: 'Stage 1986',
    targetScore: 198600,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.894,
    modifiers: []
  },
  {
    levelNumber: 1987,
    name: 'Stage 1987',
    targetScore: 198700,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.895,
    modifiers: []
  },
  {
    levelNumber: 1988,
    name: 'Stage 1988',
    targetScore: 198800,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.895,
    modifiers: []
  },
  {
    levelNumber: 1989,
    name: 'Stage 1989',
    targetScore: 198900,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.896,
    modifiers: []
  },
  {
    levelNumber: 1990,
    name: 'Stage 1990',
    targetScore: 199000,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.896,
    modifiers: []
  },
  {
    levelNumber: 1991,
    name: 'Stage 1991',
    targetScore: 199100,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.896,
    modifiers: []
  },
  {
    levelNumber: 1992,
    name: 'Stage 1992',
    targetScore: 199200,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.897,
    modifiers: []
  },
  {
    levelNumber: 1993,
    name: 'Stage 1993',
    targetScore: 199300,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.897,
    modifiers: []
  },
  {
    levelNumber: 1994,
    name: 'Stage 1994',
    targetScore: 199400,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.898,
    modifiers: []
  },
  {
    levelNumber: 1995,
    name: 'Stage 1995',
    targetScore: 199500,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.898,
    modifiers: []
  },
  {
    levelNumber: 1996,
    name: 'Stage 1996',
    targetScore: 199600,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.898,
    modifiers: []
  },
  {
    levelNumber: 1997,
    name: 'Stage 1997',
    targetScore: 199700,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.899,
    modifiers: []
  },
  {
    levelNumber: 1998,
    name: 'Stage 1998',
    targetScore: 199800,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.899,
    modifiers: []
  },
  {
    levelNumber: 1999,
    name: 'Stage 1999',
    targetScore: 199900,
    timeLimit: 21,
    gridSize: 9,
    colorSimilarity: 0.900,
    modifiers: []
  },
  {
    levelNumber: 2000,
    name: 'Stage 2000',
    targetScore: 200000,
    timeLimit: 20,
    gridSize: 9,
    colorSimilarity: 0.900,
    modifiers: ['stroop', 'moving']
  },
];