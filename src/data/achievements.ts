export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirementType: 'score' | 'combo' | 'games_played' | 'accuracy' | 'level' | 'time' | 'specific_mode';
  requirementValue: number;
  targetMode?: string;
  rewardPoints: number;
  isSecret: boolean;
}
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach_1',
    title: 'Milestone 1',
    description: 'Reach a value of 10 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 10,
    rewardPoints: 5,
    isSecret: false
  },
  {
    id: 'ach_2',
    title: 'Milestone 2',
    description: 'Reach a value of 20 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 20,
    rewardPoints: 10,
    isSecret: false
  },
  {
    id: 'ach_3',
    title: 'Milestone 3',
    description: 'Reach a value of 30 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 30,
    rewardPoints: 15,
    isSecret: false
  },
  {
    id: 'ach_4',
    title: 'Milestone 4',
    description: 'Reach a value of 40 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 40,
    rewardPoints: 20,
    isSecret: false
  },
  {
    id: 'ach_5',
    title: 'Milestone 5',
    description: 'Reach a value of 50 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 50,
    rewardPoints: 25,
    isSecret: false
  },
  {
    id: 'ach_6',
    title: 'Milestone 6',
    description: 'Reach a value of 60 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 60,
    rewardPoints: 30,
    isSecret: false
  },
  {
    id: 'ach_7',
    title: 'Milestone 7',
    description: 'Reach a value of 70 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 70,
    rewardPoints: 35,
    isSecret: false
  },
  {
    id: 'ach_8',
    title: 'Milestone 8',
    description: 'Reach a value of 80 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 80,
    rewardPoints: 40,
    isSecret: false
  },
  {
    id: 'ach_9',
    title: 'Milestone 9',
    description: 'Reach a value of 90 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 90,
    rewardPoints: 45,
    isSecret: false
  },
  {
    id: 'ach_10',
    title: 'Milestone 10',
    description: 'Reach a value of 100 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 100,
    rewardPoints: 50,
    isSecret: true
  },
  {
    id: 'ach_11',
    title: 'Milestone 11',
    description: 'Reach a value of 110 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 110,
    rewardPoints: 55,
    isSecret: false
  },
  {
    id: 'ach_12',
    title: 'Milestone 12',
    description: 'Reach a value of 120 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 120,
    rewardPoints: 60,
    isSecret: false
  },
  {
    id: 'ach_13',
    title: 'Milestone 13',
    description: 'Reach a value of 130 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 130,
    rewardPoints: 65,
    isSecret: false
  },
  {
    id: 'ach_14',
    title: 'Milestone 14',
    description: 'Reach a value of 140 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 140,
    rewardPoints: 70,
    isSecret: false
  },
  {
    id: 'ach_15',
    title: 'Milestone 15',
    description: 'Reach a value of 150 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 150,
    rewardPoints: 75,
    isSecret: false
  },
  {
    id: 'ach_16',
    title: 'Milestone 16',
    description: 'Reach a value of 160 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 160,
    rewardPoints: 80,
    isSecret: false
  },
  {
    id: 'ach_17',
    title: 'Milestone 17',
    description: 'Reach a value of 170 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 170,
    rewardPoints: 85,
    isSecret: false
  },
  {
    id: 'ach_18',
    title: 'Milestone 18',
    description: 'Reach a value of 180 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 180,
    rewardPoints: 90,
    isSecret: false
  },
  {
    id: 'ach_19',
    title: 'Milestone 19',
    description: 'Reach a value of 190 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 190,
    rewardPoints: 95,
    isSecret: false
  },
  {
    id: 'ach_20',
    title: 'Milestone 20',
    description: 'Reach a value of 200 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 200,
    rewardPoints: 100,
    isSecret: true
  },
  {
    id: 'ach_21',
    title: 'Milestone 21',
    description: 'Reach a value of 210 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 210,
    rewardPoints: 105,
    isSecret: false
  },
  {
    id: 'ach_22',
    title: 'Milestone 22',
    description: 'Reach a value of 220 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 220,
    rewardPoints: 110,
    isSecret: false
  },
  {
    id: 'ach_23',
    title: 'Milestone 23',
    description: 'Reach a value of 230 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 230,
    rewardPoints: 115,
    isSecret: false
  },
  {
    id: 'ach_24',
    title: 'Milestone 24',
    description: 'Reach a value of 240 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 240,
    rewardPoints: 120,
    isSecret: false
  },
  {
    id: 'ach_25',
    title: 'Milestone 25',
    description: 'Reach a value of 250 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 250,
    rewardPoints: 125,
    isSecret: false
  },
  {
    id: 'ach_26',
    title: 'Milestone 26',
    description: 'Reach a value of 260 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 260,
    rewardPoints: 130,
    isSecret: false
  },
  {
    id: 'ach_27',
    title: 'Milestone 27',
    description: 'Reach a value of 270 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 270,
    rewardPoints: 135,
    isSecret: false
  },
  {
    id: 'ach_28',
    title: 'Milestone 28',
    description: 'Reach a value of 280 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 280,
    rewardPoints: 140,
    isSecret: false
  },
  {
    id: 'ach_29',
    title: 'Milestone 29',
    description: 'Reach a value of 290 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 290,
    rewardPoints: 145,
    isSecret: false
  },
  {
    id: 'ach_30',
    title: 'Milestone 30',
    description: 'Reach a value of 300 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 300,
    rewardPoints: 150,
    isSecret: true
  },
  {
    id: 'ach_31',
    title: 'Milestone 31',
    description: 'Reach a value of 310 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 310,
    rewardPoints: 155,
    isSecret: false
  },
  {
    id: 'ach_32',
    title: 'Milestone 32',
    description: 'Reach a value of 320 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 320,
    rewardPoints: 160,
    isSecret: false
  },
  {
    id: 'ach_33',
    title: 'Milestone 33',
    description: 'Reach a value of 330 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 330,
    rewardPoints: 165,
    isSecret: false
  },
  {
    id: 'ach_34',
    title: 'Milestone 34',
    description: 'Reach a value of 340 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 340,
    rewardPoints: 170,
    isSecret: false
  },
  {
    id: 'ach_35',
    title: 'Milestone 35',
    description: 'Reach a value of 350 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 350,
    rewardPoints: 175,
    isSecret: false
  },
  {
    id: 'ach_36',
    title: 'Milestone 36',
    description: 'Reach a value of 360 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 360,
    rewardPoints: 180,
    isSecret: false
  },
  {
    id: 'ach_37',
    title: 'Milestone 37',
    description: 'Reach a value of 370 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 370,
    rewardPoints: 185,
    isSecret: false
  },
  {
    id: 'ach_38',
    title: 'Milestone 38',
    description: 'Reach a value of 380 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 380,
    rewardPoints: 190,
    isSecret: false
  },
  {
    id: 'ach_39',
    title: 'Milestone 39',
    description: 'Reach a value of 390 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 390,
    rewardPoints: 195,
    isSecret: false
  },
  {
    id: 'ach_40',
    title: 'Milestone 40',
    description: 'Reach a value of 400 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 400,
    rewardPoints: 200,
    isSecret: true
  },
  {
    id: 'ach_41',
    title: 'Milestone 41',
    description: 'Reach a value of 410 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 410,
    rewardPoints: 205,
    isSecret: false
  },
  {
    id: 'ach_42',
    title: 'Milestone 42',
    description: 'Reach a value of 420 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 420,
    rewardPoints: 210,
    isSecret: false
  },
  {
    id: 'ach_43',
    title: 'Milestone 43',
    description: 'Reach a value of 430 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 430,
    rewardPoints: 215,
    isSecret: false
  },
  {
    id: 'ach_44',
    title: 'Milestone 44',
    description: 'Reach a value of 440 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 440,
    rewardPoints: 220,
    isSecret: false
  },
  {
    id: 'ach_45',
    title: 'Milestone 45',
    description: 'Reach a value of 450 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 450,
    rewardPoints: 225,
    isSecret: false
  },
  {
    id: 'ach_46',
    title: 'Milestone 46',
    description: 'Reach a value of 460 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 460,
    rewardPoints: 230,
    isSecret: false
  },
  {
    id: 'ach_47',
    title: 'Milestone 47',
    description: 'Reach a value of 470 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 470,
    rewardPoints: 235,
    isSecret: false
  },
  {
    id: 'ach_48',
    title: 'Milestone 48',
    description: 'Reach a value of 480 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 480,
    rewardPoints: 240,
    isSecret: false
  },
  {
    id: 'ach_49',
    title: 'Milestone 49',
    description: 'Reach a value of 490 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 490,
    rewardPoints: 245,
    isSecret: false
  },
  {
    id: 'ach_50',
    title: 'Milestone 50',
    description: 'Reach a value of 500 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 500,
    rewardPoints: 250,
    isSecret: true
  },
  {
    id: 'ach_51',
    title: 'Milestone 51',
    description: 'Reach a value of 510 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 510,
    rewardPoints: 255,
    isSecret: false
  },
  {
    id: 'ach_52',
    title: 'Milestone 52',
    description: 'Reach a value of 520 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 520,
    rewardPoints: 260,
    isSecret: false
  },
  {
    id: 'ach_53',
    title: 'Milestone 53',
    description: 'Reach a value of 530 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 530,
    rewardPoints: 265,
    isSecret: false
  },
  {
    id: 'ach_54',
    title: 'Milestone 54',
    description: 'Reach a value of 540 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 540,
    rewardPoints: 270,
    isSecret: false
  },
  {
    id: 'ach_55',
    title: 'Milestone 55',
    description: 'Reach a value of 550 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 550,
    rewardPoints: 275,
    isSecret: false
  },
  {
    id: 'ach_56',
    title: 'Milestone 56',
    description: 'Reach a value of 560 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 560,
    rewardPoints: 280,
    isSecret: false
  },
  {
    id: 'ach_57',
    title: 'Milestone 57',
    description: 'Reach a value of 570 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 570,
    rewardPoints: 285,
    isSecret: false
  },
  {
    id: 'ach_58',
    title: 'Milestone 58',
    description: 'Reach a value of 580 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 580,
    rewardPoints: 290,
    isSecret: false
  },
  {
    id: 'ach_59',
    title: 'Milestone 59',
    description: 'Reach a value of 590 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 590,
    rewardPoints: 295,
    isSecret: false
  },
  {
    id: 'ach_60',
    title: 'Milestone 60',
    description: 'Reach a value of 600 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 600,
    rewardPoints: 300,
    isSecret: true
  },
  {
    id: 'ach_61',
    title: 'Milestone 61',
    description: 'Reach a value of 610 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 610,
    rewardPoints: 305,
    isSecret: false
  },
  {
    id: 'ach_62',
    title: 'Milestone 62',
    description: 'Reach a value of 620 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 620,
    rewardPoints: 310,
    isSecret: false
  },
  {
    id: 'ach_63',
    title: 'Milestone 63',
    description: 'Reach a value of 630 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 630,
    rewardPoints: 315,
    isSecret: false
  },
  {
    id: 'ach_64',
    title: 'Milestone 64',
    description: 'Reach a value of 640 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 640,
    rewardPoints: 320,
    isSecret: false
  },
  {
    id: 'ach_65',
    title: 'Milestone 65',
    description: 'Reach a value of 650 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 650,
    rewardPoints: 325,
    isSecret: false
  },
  {
    id: 'ach_66',
    title: 'Milestone 66',
    description: 'Reach a value of 660 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 660,
    rewardPoints: 330,
    isSecret: false
  },
  {
    id: 'ach_67',
    title: 'Milestone 67',
    description: 'Reach a value of 670 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 670,
    rewardPoints: 335,
    isSecret: false
  },
  {
    id: 'ach_68',
    title: 'Milestone 68',
    description: 'Reach a value of 680 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 680,
    rewardPoints: 340,
    isSecret: false
  },
  {
    id: 'ach_69',
    title: 'Milestone 69',
    description: 'Reach a value of 690 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 690,
    rewardPoints: 345,
    isSecret: false
  },
  {
    id: 'ach_70',
    title: 'Milestone 70',
    description: 'Reach a value of 700 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 700,
    rewardPoints: 350,
    isSecret: true
  },
  {
    id: 'ach_71',
    title: 'Milestone 71',
    description: 'Reach a value of 710 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 710,
    rewardPoints: 355,
    isSecret: false
  },
  {
    id: 'ach_72',
    title: 'Milestone 72',
    description: 'Reach a value of 720 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 720,
    rewardPoints: 360,
    isSecret: false
  },
  {
    id: 'ach_73',
    title: 'Milestone 73',
    description: 'Reach a value of 730 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 730,
    rewardPoints: 365,
    isSecret: false
  },
  {
    id: 'ach_74',
    title: 'Milestone 74',
    description: 'Reach a value of 740 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 740,
    rewardPoints: 370,
    isSecret: false
  },
  {
    id: 'ach_75',
    title: 'Milestone 75',
    description: 'Reach a value of 750 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 750,
    rewardPoints: 375,
    isSecret: false
  },
  {
    id: 'ach_76',
    title: 'Milestone 76',
    description: 'Reach a value of 760 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 760,
    rewardPoints: 380,
    isSecret: false
  },
  {
    id: 'ach_77',
    title: 'Milestone 77',
    description: 'Reach a value of 770 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 770,
    rewardPoints: 385,
    isSecret: false
  },
  {
    id: 'ach_78',
    title: 'Milestone 78',
    description: 'Reach a value of 780 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 780,
    rewardPoints: 390,
    isSecret: false
  },
  {
    id: 'ach_79',
    title: 'Milestone 79',
    description: 'Reach a value of 790 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 790,
    rewardPoints: 395,
    isSecret: false
  },
  {
    id: 'ach_80',
    title: 'Milestone 80',
    description: 'Reach a value of 800 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 800,
    rewardPoints: 400,
    isSecret: true
  },
  {
    id: 'ach_81',
    title: 'Milestone 81',
    description: 'Reach a value of 810 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 810,
    rewardPoints: 405,
    isSecret: false
  },
  {
    id: 'ach_82',
    title: 'Milestone 82',
    description: 'Reach a value of 820 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 820,
    rewardPoints: 410,
    isSecret: false
  },
  {
    id: 'ach_83',
    title: 'Milestone 83',
    description: 'Reach a value of 830 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 830,
    rewardPoints: 415,
    isSecret: false
  },
  {
    id: 'ach_84',
    title: 'Milestone 84',
    description: 'Reach a value of 840 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 840,
    rewardPoints: 420,
    isSecret: false
  },
  {
    id: 'ach_85',
    title: 'Milestone 85',
    description: 'Reach a value of 850 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 850,
    rewardPoints: 425,
    isSecret: false
  },
  {
    id: 'ach_86',
    title: 'Milestone 86',
    description: 'Reach a value of 860 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 860,
    rewardPoints: 430,
    isSecret: false
  },
  {
    id: 'ach_87',
    title: 'Milestone 87',
    description: 'Reach a value of 870 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 870,
    rewardPoints: 435,
    isSecret: false
  },
  {
    id: 'ach_88',
    title: 'Milestone 88',
    description: 'Reach a value of 880 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 880,
    rewardPoints: 440,
    isSecret: false
  },
  {
    id: 'ach_89',
    title: 'Milestone 89',
    description: 'Reach a value of 890 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 890,
    rewardPoints: 445,
    isSecret: false
  },
  {
    id: 'ach_90',
    title: 'Milestone 90',
    description: 'Reach a value of 900 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 900,
    rewardPoints: 450,
    isSecret: true
  },
  {
    id: 'ach_91',
    title: 'Milestone 91',
    description: 'Reach a value of 910 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 910,
    rewardPoints: 455,
    isSecret: false
  },
  {
    id: 'ach_92',
    title: 'Milestone 92',
    description: 'Reach a value of 920 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 920,
    rewardPoints: 460,
    isSecret: false
  },
  {
    id: 'ach_93',
    title: 'Milestone 93',
    description: 'Reach a value of 930 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 930,
    rewardPoints: 465,
    isSecret: false
  },
  {
    id: 'ach_94',
    title: 'Milestone 94',
    description: 'Reach a value of 940 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 940,
    rewardPoints: 470,
    isSecret: false
  },
  {
    id: 'ach_95',
    title: 'Milestone 95',
    description: 'Reach a value of 950 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 950,
    rewardPoints: 475,
    isSecret: false
  },
  {
    id: 'ach_96',
    title: 'Milestone 96',
    description: 'Reach a value of 960 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 960,
    rewardPoints: 480,
    isSecret: false
  },
  {
    id: 'ach_97',
    title: 'Milestone 97',
    description: 'Reach a value of 970 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 970,
    rewardPoints: 485,
    isSecret: false
  },
  {
    id: 'ach_98',
    title: 'Milestone 98',
    description: 'Reach a value of 980 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 980,
    rewardPoints: 490,
    isSecret: false
  },
  {
    id: 'ach_99',
    title: 'Milestone 99',
    description: 'Reach a value of 990 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 990,
    rewardPoints: 495,
    isSecret: false
  },
  {
    id: 'ach_100',
    title: 'Milestone 100',
    description: 'Reach a value of 1000 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1000,
    rewardPoints: 500,
    isSecret: true
  },
  {
    id: 'ach_101',
    title: 'Milestone 101',
    description: 'Reach a value of 1010 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1010,
    rewardPoints: 505,
    isSecret: false
  },
  {
    id: 'ach_102',
    title: 'Milestone 102',
    description: 'Reach a value of 1020 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1020,
    rewardPoints: 510,
    isSecret: false
  },
  {
    id: 'ach_103',
    title: 'Milestone 103',
    description: 'Reach a value of 1030 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1030,
    rewardPoints: 515,
    isSecret: false
  },
  {
    id: 'ach_104',
    title: 'Milestone 104',
    description: 'Reach a value of 1040 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1040,
    rewardPoints: 520,
    isSecret: false
  },
  {
    id: 'ach_105',
    title: 'Milestone 105',
    description: 'Reach a value of 1050 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1050,
    rewardPoints: 525,
    isSecret: false
  },
  {
    id: 'ach_106',
    title: 'Milestone 106',
    description: 'Reach a value of 1060 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1060,
    rewardPoints: 530,
    isSecret: false
  },
  {
    id: 'ach_107',
    title: 'Milestone 107',
    description: 'Reach a value of 1070 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1070,
    rewardPoints: 535,
    isSecret: false
  },
  {
    id: 'ach_108',
    title: 'Milestone 108',
    description: 'Reach a value of 1080 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1080,
    rewardPoints: 540,
    isSecret: false
  },
  {
    id: 'ach_109',
    title: 'Milestone 109',
    description: 'Reach a value of 1090 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1090,
    rewardPoints: 545,
    isSecret: false
  },
  {
    id: 'ach_110',
    title: 'Milestone 110',
    description: 'Reach a value of 1100 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1100,
    rewardPoints: 550,
    isSecret: true
  },
  {
    id: 'ach_111',
    title: 'Milestone 111',
    description: 'Reach a value of 1110 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1110,
    rewardPoints: 555,
    isSecret: false
  },
  {
    id: 'ach_112',
    title: 'Milestone 112',
    description: 'Reach a value of 1120 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1120,
    rewardPoints: 560,
    isSecret: false
  },
  {
    id: 'ach_113',
    title: 'Milestone 113',
    description: 'Reach a value of 1130 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1130,
    rewardPoints: 565,
    isSecret: false
  },
  {
    id: 'ach_114',
    title: 'Milestone 114',
    description: 'Reach a value of 1140 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1140,
    rewardPoints: 570,
    isSecret: false
  },
  {
    id: 'ach_115',
    title: 'Milestone 115',
    description: 'Reach a value of 1150 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1150,
    rewardPoints: 575,
    isSecret: false
  },
  {
    id: 'ach_116',
    title: 'Milestone 116',
    description: 'Reach a value of 1160 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1160,
    rewardPoints: 580,
    isSecret: false
  },
  {
    id: 'ach_117',
    title: 'Milestone 117',
    description: 'Reach a value of 1170 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1170,
    rewardPoints: 585,
    isSecret: false
  },
  {
    id: 'ach_118',
    title: 'Milestone 118',
    description: 'Reach a value of 1180 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1180,
    rewardPoints: 590,
    isSecret: false
  },
  {
    id: 'ach_119',
    title: 'Milestone 119',
    description: 'Reach a value of 1190 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1190,
    rewardPoints: 595,
    isSecret: false
  },
  {
    id: 'ach_120',
    title: 'Milestone 120',
    description: 'Reach a value of 1200 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1200,
    rewardPoints: 600,
    isSecret: true
  },
  {
    id: 'ach_121',
    title: 'Milestone 121',
    description: 'Reach a value of 1210 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1210,
    rewardPoints: 605,
    isSecret: false
  },
  {
    id: 'ach_122',
    title: 'Milestone 122',
    description: 'Reach a value of 1220 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1220,
    rewardPoints: 610,
    isSecret: false
  },
  {
    id: 'ach_123',
    title: 'Milestone 123',
    description: 'Reach a value of 1230 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1230,
    rewardPoints: 615,
    isSecret: false
  },
  {
    id: 'ach_124',
    title: 'Milestone 124',
    description: 'Reach a value of 1240 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1240,
    rewardPoints: 620,
    isSecret: false
  },
  {
    id: 'ach_125',
    title: 'Milestone 125',
    description: 'Reach a value of 1250 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1250,
    rewardPoints: 625,
    isSecret: false
  },
  {
    id: 'ach_126',
    title: 'Milestone 126',
    description: 'Reach a value of 1260 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1260,
    rewardPoints: 630,
    isSecret: false
  },
  {
    id: 'ach_127',
    title: 'Milestone 127',
    description: 'Reach a value of 1270 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1270,
    rewardPoints: 635,
    isSecret: false
  },
  {
    id: 'ach_128',
    title: 'Milestone 128',
    description: 'Reach a value of 1280 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1280,
    rewardPoints: 640,
    isSecret: false
  },
  {
    id: 'ach_129',
    title: 'Milestone 129',
    description: 'Reach a value of 1290 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1290,
    rewardPoints: 645,
    isSecret: false
  },
  {
    id: 'ach_130',
    title: 'Milestone 130',
    description: 'Reach a value of 1300 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1300,
    rewardPoints: 650,
    isSecret: true
  },
  {
    id: 'ach_131',
    title: 'Milestone 131',
    description: 'Reach a value of 1310 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1310,
    rewardPoints: 655,
    isSecret: false
  },
  {
    id: 'ach_132',
    title: 'Milestone 132',
    description: 'Reach a value of 1320 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1320,
    rewardPoints: 660,
    isSecret: false
  },
  {
    id: 'ach_133',
    title: 'Milestone 133',
    description: 'Reach a value of 1330 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1330,
    rewardPoints: 665,
    isSecret: false
  },
  {
    id: 'ach_134',
    title: 'Milestone 134',
    description: 'Reach a value of 1340 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1340,
    rewardPoints: 670,
    isSecret: false
  },
  {
    id: 'ach_135',
    title: 'Milestone 135',
    description: 'Reach a value of 1350 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1350,
    rewardPoints: 675,
    isSecret: false
  },
  {
    id: 'ach_136',
    title: 'Milestone 136',
    description: 'Reach a value of 1360 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1360,
    rewardPoints: 680,
    isSecret: false
  },
  {
    id: 'ach_137',
    title: 'Milestone 137',
    description: 'Reach a value of 1370 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1370,
    rewardPoints: 685,
    isSecret: false
  },
  {
    id: 'ach_138',
    title: 'Milestone 138',
    description: 'Reach a value of 1380 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1380,
    rewardPoints: 690,
    isSecret: false
  },
  {
    id: 'ach_139',
    title: 'Milestone 139',
    description: 'Reach a value of 1390 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1390,
    rewardPoints: 695,
    isSecret: false
  },
  {
    id: 'ach_140',
    title: 'Milestone 140',
    description: 'Reach a value of 1400 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1400,
    rewardPoints: 700,
    isSecret: true
  },
  {
    id: 'ach_141',
    title: 'Milestone 141',
    description: 'Reach a value of 1410 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1410,
    rewardPoints: 705,
    isSecret: false
  },
  {
    id: 'ach_142',
    title: 'Milestone 142',
    description: 'Reach a value of 1420 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1420,
    rewardPoints: 710,
    isSecret: false
  },
  {
    id: 'ach_143',
    title: 'Milestone 143',
    description: 'Reach a value of 1430 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1430,
    rewardPoints: 715,
    isSecret: false
  },
  {
    id: 'ach_144',
    title: 'Milestone 144',
    description: 'Reach a value of 1440 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1440,
    rewardPoints: 720,
    isSecret: false
  },
  {
    id: 'ach_145',
    title: 'Milestone 145',
    description: 'Reach a value of 1450 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1450,
    rewardPoints: 725,
    isSecret: false
  },
  {
    id: 'ach_146',
    title: 'Milestone 146',
    description: 'Reach a value of 1460 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1460,
    rewardPoints: 730,
    isSecret: false
  },
  {
    id: 'ach_147',
    title: 'Milestone 147',
    description: 'Reach a value of 1470 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1470,
    rewardPoints: 735,
    isSecret: false
  },
  {
    id: 'ach_148',
    title: 'Milestone 148',
    description: 'Reach a value of 1480 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1480,
    rewardPoints: 740,
    isSecret: false
  },
  {
    id: 'ach_149',
    title: 'Milestone 149',
    description: 'Reach a value of 1490 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1490,
    rewardPoints: 745,
    isSecret: false
  },
  {
    id: 'ach_150',
    title: 'Milestone 150',
    description: 'Reach a value of 1500 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1500,
    rewardPoints: 750,
    isSecret: true
  },
  {
    id: 'ach_151',
    title: 'Milestone 151',
    description: 'Reach a value of 1510 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1510,
    rewardPoints: 755,
    isSecret: false
  },
  {
    id: 'ach_152',
    title: 'Milestone 152',
    description: 'Reach a value of 1520 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1520,
    rewardPoints: 760,
    isSecret: false
  },
  {
    id: 'ach_153',
    title: 'Milestone 153',
    description: 'Reach a value of 1530 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1530,
    rewardPoints: 765,
    isSecret: false
  },
  {
    id: 'ach_154',
    title: 'Milestone 154',
    description: 'Reach a value of 1540 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1540,
    rewardPoints: 770,
    isSecret: false
  },
  {
    id: 'ach_155',
    title: 'Milestone 155',
    description: 'Reach a value of 1550 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1550,
    rewardPoints: 775,
    isSecret: false
  },
  {
    id: 'ach_156',
    title: 'Milestone 156',
    description: 'Reach a value of 1560 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1560,
    rewardPoints: 780,
    isSecret: false
  },
  {
    id: 'ach_157',
    title: 'Milestone 157',
    description: 'Reach a value of 1570 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1570,
    rewardPoints: 785,
    isSecret: false
  },
  {
    id: 'ach_158',
    title: 'Milestone 158',
    description: 'Reach a value of 1580 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1580,
    rewardPoints: 790,
    isSecret: false
  },
  {
    id: 'ach_159',
    title: 'Milestone 159',
    description: 'Reach a value of 1590 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1590,
    rewardPoints: 795,
    isSecret: false
  },
  {
    id: 'ach_160',
    title: 'Milestone 160',
    description: 'Reach a value of 1600 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1600,
    rewardPoints: 800,
    isSecret: true
  },
  {
    id: 'ach_161',
    title: 'Milestone 161',
    description: 'Reach a value of 1610 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1610,
    rewardPoints: 805,
    isSecret: false
  },
  {
    id: 'ach_162',
    title: 'Milestone 162',
    description: 'Reach a value of 1620 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1620,
    rewardPoints: 810,
    isSecret: false
  },
  {
    id: 'ach_163',
    title: 'Milestone 163',
    description: 'Reach a value of 1630 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1630,
    rewardPoints: 815,
    isSecret: false
  },
  {
    id: 'ach_164',
    title: 'Milestone 164',
    description: 'Reach a value of 1640 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1640,
    rewardPoints: 820,
    isSecret: false
  },
  {
    id: 'ach_165',
    title: 'Milestone 165',
    description: 'Reach a value of 1650 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1650,
    rewardPoints: 825,
    isSecret: false
  },
  {
    id: 'ach_166',
    title: 'Milestone 166',
    description: 'Reach a value of 1660 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1660,
    rewardPoints: 830,
    isSecret: false
  },
  {
    id: 'ach_167',
    title: 'Milestone 167',
    description: 'Reach a value of 1670 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1670,
    rewardPoints: 835,
    isSecret: false
  },
  {
    id: 'ach_168',
    title: 'Milestone 168',
    description: 'Reach a value of 1680 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1680,
    rewardPoints: 840,
    isSecret: false
  },
  {
    id: 'ach_169',
    title: 'Milestone 169',
    description: 'Reach a value of 1690 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1690,
    rewardPoints: 845,
    isSecret: false
  },
  {
    id: 'ach_170',
    title: 'Milestone 170',
    description: 'Reach a value of 1700 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1700,
    rewardPoints: 850,
    isSecret: true
  },
  {
    id: 'ach_171',
    title: 'Milestone 171',
    description: 'Reach a value of 1710 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1710,
    rewardPoints: 855,
    isSecret: false
  },
  {
    id: 'ach_172',
    title: 'Milestone 172',
    description: 'Reach a value of 1720 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1720,
    rewardPoints: 860,
    isSecret: false
  },
  {
    id: 'ach_173',
    title: 'Milestone 173',
    description: 'Reach a value of 1730 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1730,
    rewardPoints: 865,
    isSecret: false
  },
  {
    id: 'ach_174',
    title: 'Milestone 174',
    description: 'Reach a value of 1740 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1740,
    rewardPoints: 870,
    isSecret: false
  },
  {
    id: 'ach_175',
    title: 'Milestone 175',
    description: 'Reach a value of 1750 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1750,
    rewardPoints: 875,
    isSecret: false
  },
  {
    id: 'ach_176',
    title: 'Milestone 176',
    description: 'Reach a value of 1760 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1760,
    rewardPoints: 880,
    isSecret: false
  },
  {
    id: 'ach_177',
    title: 'Milestone 177',
    description: 'Reach a value of 1770 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1770,
    rewardPoints: 885,
    isSecret: false
  },
  {
    id: 'ach_178',
    title: 'Milestone 178',
    description: 'Reach a value of 1780 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1780,
    rewardPoints: 890,
    isSecret: false
  },
  {
    id: 'ach_179',
    title: 'Milestone 179',
    description: 'Reach a value of 1790 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1790,
    rewardPoints: 895,
    isSecret: false
  },
  {
    id: 'ach_180',
    title: 'Milestone 180',
    description: 'Reach a value of 1800 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1800,
    rewardPoints: 900,
    isSecret: true
  },
  {
    id: 'ach_181',
    title: 'Milestone 181',
    description: 'Reach a value of 1810 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1810,
    rewardPoints: 905,
    isSecret: false
  },
  {
    id: 'ach_182',
    title: 'Milestone 182',
    description: 'Reach a value of 1820 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1820,
    rewardPoints: 910,
    isSecret: false
  },
  {
    id: 'ach_183',
    title: 'Milestone 183',
    description: 'Reach a value of 1830 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1830,
    rewardPoints: 915,
    isSecret: false
  },
  {
    id: 'ach_184',
    title: 'Milestone 184',
    description: 'Reach a value of 1840 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1840,
    rewardPoints: 920,
    isSecret: false
  },
  {
    id: 'ach_185',
    title: 'Milestone 185',
    description: 'Reach a value of 1850 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1850,
    rewardPoints: 925,
    isSecret: false
  },
  {
    id: 'ach_186',
    title: 'Milestone 186',
    description: 'Reach a value of 1860 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1860,
    rewardPoints: 930,
    isSecret: false
  },
  {
    id: 'ach_187',
    title: 'Milestone 187',
    description: 'Reach a value of 1870 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1870,
    rewardPoints: 935,
    isSecret: false
  },
  {
    id: 'ach_188',
    title: 'Milestone 188',
    description: 'Reach a value of 1880 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1880,
    rewardPoints: 940,
    isSecret: false
  },
  {
    id: 'ach_189',
    title: 'Milestone 189',
    description: 'Reach a value of 1890 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1890,
    rewardPoints: 945,
    isSecret: false
  },
  {
    id: 'ach_190',
    title: 'Milestone 190',
    description: 'Reach a value of 1900 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1900,
    rewardPoints: 950,
    isSecret: true
  },
  {
    id: 'ach_191',
    title: 'Milestone 191',
    description: 'Reach a value of 1910 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1910,
    rewardPoints: 955,
    isSecret: false
  },
  {
    id: 'ach_192',
    title: 'Milestone 192',
    description: 'Reach a value of 1920 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1920,
    rewardPoints: 960,
    isSecret: false
  },
  {
    id: 'ach_193',
    title: 'Milestone 193',
    description: 'Reach a value of 1930 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1930,
    rewardPoints: 965,
    isSecret: false
  },
  {
    id: 'ach_194',
    title: 'Milestone 194',
    description: 'Reach a value of 1940 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1940,
    rewardPoints: 970,
    isSecret: false
  },
  {
    id: 'ach_195',
    title: 'Milestone 195',
    description: 'Reach a value of 1950 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1950,
    rewardPoints: 975,
    isSecret: false
  },
  {
    id: 'ach_196',
    title: 'Milestone 196',
    description: 'Reach a value of 1960 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 1960,
    rewardPoints: 980,
    isSecret: false
  },
  {
    id: 'ach_197',
    title: 'Milestone 197',
    description: 'Reach a value of 1970 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 1970,
    rewardPoints: 985,
    isSecret: false
  },
  {
    id: 'ach_198',
    title: 'Milestone 198',
    description: 'Reach a value of 1980 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 1980,
    rewardPoints: 990,
    isSecret: false
  },
  {
    id: 'ach_199',
    title: 'Milestone 199',
    description: 'Reach a value of 1990 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 1990,
    rewardPoints: 995,
    isSecret: false
  },
  {
    id: 'ach_200',
    title: 'Milestone 200',
    description: 'Reach a value of 2000 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2000,
    rewardPoints: 1000,
    isSecret: true
  },
  {
    id: 'ach_201',
    title: 'Milestone 201',
    description: 'Reach a value of 2010 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2010,
    rewardPoints: 1005,
    isSecret: false
  },
  {
    id: 'ach_202',
    title: 'Milestone 202',
    description: 'Reach a value of 2020 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2020,
    rewardPoints: 1010,
    isSecret: false
  },
  {
    id: 'ach_203',
    title: 'Milestone 203',
    description: 'Reach a value of 2030 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2030,
    rewardPoints: 1015,
    isSecret: false
  },
  {
    id: 'ach_204',
    title: 'Milestone 204',
    description: 'Reach a value of 2040 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2040,
    rewardPoints: 1020,
    isSecret: false
  },
  {
    id: 'ach_205',
    title: 'Milestone 205',
    description: 'Reach a value of 2050 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2050,
    rewardPoints: 1025,
    isSecret: false
  },
  {
    id: 'ach_206',
    title: 'Milestone 206',
    description: 'Reach a value of 2060 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2060,
    rewardPoints: 1030,
    isSecret: false
  },
  {
    id: 'ach_207',
    title: 'Milestone 207',
    description: 'Reach a value of 2070 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2070,
    rewardPoints: 1035,
    isSecret: false
  },
  {
    id: 'ach_208',
    title: 'Milestone 208',
    description: 'Reach a value of 2080 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2080,
    rewardPoints: 1040,
    isSecret: false
  },
  {
    id: 'ach_209',
    title: 'Milestone 209',
    description: 'Reach a value of 2090 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2090,
    rewardPoints: 1045,
    isSecret: false
  },
  {
    id: 'ach_210',
    title: 'Milestone 210',
    description: 'Reach a value of 2100 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2100,
    rewardPoints: 1050,
    isSecret: true
  },
  {
    id: 'ach_211',
    title: 'Milestone 211',
    description: 'Reach a value of 2110 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2110,
    rewardPoints: 1055,
    isSecret: false
  },
  {
    id: 'ach_212',
    title: 'Milestone 212',
    description: 'Reach a value of 2120 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2120,
    rewardPoints: 1060,
    isSecret: false
  },
  {
    id: 'ach_213',
    title: 'Milestone 213',
    description: 'Reach a value of 2130 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2130,
    rewardPoints: 1065,
    isSecret: false
  },
  {
    id: 'ach_214',
    title: 'Milestone 214',
    description: 'Reach a value of 2140 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2140,
    rewardPoints: 1070,
    isSecret: false
  },
  {
    id: 'ach_215',
    title: 'Milestone 215',
    description: 'Reach a value of 2150 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2150,
    rewardPoints: 1075,
    isSecret: false
  },
  {
    id: 'ach_216',
    title: 'Milestone 216',
    description: 'Reach a value of 2160 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2160,
    rewardPoints: 1080,
    isSecret: false
  },
  {
    id: 'ach_217',
    title: 'Milestone 217',
    description: 'Reach a value of 2170 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2170,
    rewardPoints: 1085,
    isSecret: false
  },
  {
    id: 'ach_218',
    title: 'Milestone 218',
    description: 'Reach a value of 2180 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2180,
    rewardPoints: 1090,
    isSecret: false
  },
  {
    id: 'ach_219',
    title: 'Milestone 219',
    description: 'Reach a value of 2190 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2190,
    rewardPoints: 1095,
    isSecret: false
  },
  {
    id: 'ach_220',
    title: 'Milestone 220',
    description: 'Reach a value of 2200 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2200,
    rewardPoints: 1100,
    isSecret: true
  },
  {
    id: 'ach_221',
    title: 'Milestone 221',
    description: 'Reach a value of 2210 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2210,
    rewardPoints: 1105,
    isSecret: false
  },
  {
    id: 'ach_222',
    title: 'Milestone 222',
    description: 'Reach a value of 2220 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2220,
    rewardPoints: 1110,
    isSecret: false
  },
  {
    id: 'ach_223',
    title: 'Milestone 223',
    description: 'Reach a value of 2230 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2230,
    rewardPoints: 1115,
    isSecret: false
  },
  {
    id: 'ach_224',
    title: 'Milestone 224',
    description: 'Reach a value of 2240 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2240,
    rewardPoints: 1120,
    isSecret: false
  },
  {
    id: 'ach_225',
    title: 'Milestone 225',
    description: 'Reach a value of 2250 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2250,
    rewardPoints: 1125,
    isSecret: false
  },
  {
    id: 'ach_226',
    title: 'Milestone 226',
    description: 'Reach a value of 2260 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2260,
    rewardPoints: 1130,
    isSecret: false
  },
  {
    id: 'ach_227',
    title: 'Milestone 227',
    description: 'Reach a value of 2270 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2270,
    rewardPoints: 1135,
    isSecret: false
  },
  {
    id: 'ach_228',
    title: 'Milestone 228',
    description: 'Reach a value of 2280 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2280,
    rewardPoints: 1140,
    isSecret: false
  },
  {
    id: 'ach_229',
    title: 'Milestone 229',
    description: 'Reach a value of 2290 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2290,
    rewardPoints: 1145,
    isSecret: false
  },
  {
    id: 'ach_230',
    title: 'Milestone 230',
    description: 'Reach a value of 2300 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2300,
    rewardPoints: 1150,
    isSecret: true
  },
  {
    id: 'ach_231',
    title: 'Milestone 231',
    description: 'Reach a value of 2310 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2310,
    rewardPoints: 1155,
    isSecret: false
  },
  {
    id: 'ach_232',
    title: 'Milestone 232',
    description: 'Reach a value of 2320 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2320,
    rewardPoints: 1160,
    isSecret: false
  },
  {
    id: 'ach_233',
    title: 'Milestone 233',
    description: 'Reach a value of 2330 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2330,
    rewardPoints: 1165,
    isSecret: false
  },
  {
    id: 'ach_234',
    title: 'Milestone 234',
    description: 'Reach a value of 2340 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2340,
    rewardPoints: 1170,
    isSecret: false
  },
  {
    id: 'ach_235',
    title: 'Milestone 235',
    description: 'Reach a value of 2350 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2350,
    rewardPoints: 1175,
    isSecret: false
  },
  {
    id: 'ach_236',
    title: 'Milestone 236',
    description: 'Reach a value of 2360 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2360,
    rewardPoints: 1180,
    isSecret: false
  },
  {
    id: 'ach_237',
    title: 'Milestone 237',
    description: 'Reach a value of 2370 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2370,
    rewardPoints: 1185,
    isSecret: false
  },
  {
    id: 'ach_238',
    title: 'Milestone 238',
    description: 'Reach a value of 2380 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2380,
    rewardPoints: 1190,
    isSecret: false
  },
  {
    id: 'ach_239',
    title: 'Milestone 239',
    description: 'Reach a value of 2390 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2390,
    rewardPoints: 1195,
    isSecret: false
  },
  {
    id: 'ach_240',
    title: 'Milestone 240',
    description: 'Reach a value of 2400 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2400,
    rewardPoints: 1200,
    isSecret: true
  },
  {
    id: 'ach_241',
    title: 'Milestone 241',
    description: 'Reach a value of 2410 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2410,
    rewardPoints: 1205,
    isSecret: false
  },
  {
    id: 'ach_242',
    title: 'Milestone 242',
    description: 'Reach a value of 2420 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2420,
    rewardPoints: 1210,
    isSecret: false
  },
  {
    id: 'ach_243',
    title: 'Milestone 243',
    description: 'Reach a value of 2430 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2430,
    rewardPoints: 1215,
    isSecret: false
  },
  {
    id: 'ach_244',
    title: 'Milestone 244',
    description: 'Reach a value of 2440 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2440,
    rewardPoints: 1220,
    isSecret: false
  },
  {
    id: 'ach_245',
    title: 'Milestone 245',
    description: 'Reach a value of 2450 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2450,
    rewardPoints: 1225,
    isSecret: false
  },
  {
    id: 'ach_246',
    title: 'Milestone 246',
    description: 'Reach a value of 2460 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2460,
    rewardPoints: 1230,
    isSecret: false
  },
  {
    id: 'ach_247',
    title: 'Milestone 247',
    description: 'Reach a value of 2470 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2470,
    rewardPoints: 1235,
    isSecret: false
  },
  {
    id: 'ach_248',
    title: 'Milestone 248',
    description: 'Reach a value of 2480 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2480,
    rewardPoints: 1240,
    isSecret: false
  },
  {
    id: 'ach_249',
    title: 'Milestone 249',
    description: 'Reach a value of 2490 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2490,
    rewardPoints: 1245,
    isSecret: false
  },
  {
    id: 'ach_250',
    title: 'Milestone 250',
    description: 'Reach a value of 2500 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2500,
    rewardPoints: 1250,
    isSecret: true
  },
  {
    id: 'ach_251',
    title: 'Milestone 251',
    description: 'Reach a value of 2510 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2510,
    rewardPoints: 1255,
    isSecret: false
  },
  {
    id: 'ach_252',
    title: 'Milestone 252',
    description: 'Reach a value of 2520 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2520,
    rewardPoints: 1260,
    isSecret: false
  },
  {
    id: 'ach_253',
    title: 'Milestone 253',
    description: 'Reach a value of 2530 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2530,
    rewardPoints: 1265,
    isSecret: false
  },
  {
    id: 'ach_254',
    title: 'Milestone 254',
    description: 'Reach a value of 2540 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2540,
    rewardPoints: 1270,
    isSecret: false
  },
  {
    id: 'ach_255',
    title: 'Milestone 255',
    description: 'Reach a value of 2550 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2550,
    rewardPoints: 1275,
    isSecret: false
  },
  {
    id: 'ach_256',
    title: 'Milestone 256',
    description: 'Reach a value of 2560 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2560,
    rewardPoints: 1280,
    isSecret: false
  },
  {
    id: 'ach_257',
    title: 'Milestone 257',
    description: 'Reach a value of 2570 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2570,
    rewardPoints: 1285,
    isSecret: false
  },
  {
    id: 'ach_258',
    title: 'Milestone 258',
    description: 'Reach a value of 2580 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2580,
    rewardPoints: 1290,
    isSecret: false
  },
  {
    id: 'ach_259',
    title: 'Milestone 259',
    description: 'Reach a value of 2590 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2590,
    rewardPoints: 1295,
    isSecret: false
  },
  {
    id: 'ach_260',
    title: 'Milestone 260',
    description: 'Reach a value of 2600 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2600,
    rewardPoints: 1300,
    isSecret: true
  },
  {
    id: 'ach_261',
    title: 'Milestone 261',
    description: 'Reach a value of 2610 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2610,
    rewardPoints: 1305,
    isSecret: false
  },
  {
    id: 'ach_262',
    title: 'Milestone 262',
    description: 'Reach a value of 2620 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2620,
    rewardPoints: 1310,
    isSecret: false
  },
  {
    id: 'ach_263',
    title: 'Milestone 263',
    description: 'Reach a value of 2630 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2630,
    rewardPoints: 1315,
    isSecret: false
  },
  {
    id: 'ach_264',
    title: 'Milestone 264',
    description: 'Reach a value of 2640 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2640,
    rewardPoints: 1320,
    isSecret: false
  },
  {
    id: 'ach_265',
    title: 'Milestone 265',
    description: 'Reach a value of 2650 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2650,
    rewardPoints: 1325,
    isSecret: false
  },
  {
    id: 'ach_266',
    title: 'Milestone 266',
    description: 'Reach a value of 2660 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2660,
    rewardPoints: 1330,
    isSecret: false
  },
  {
    id: 'ach_267',
    title: 'Milestone 267',
    description: 'Reach a value of 2670 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2670,
    rewardPoints: 1335,
    isSecret: false
  },
  {
    id: 'ach_268',
    title: 'Milestone 268',
    description: 'Reach a value of 2680 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2680,
    rewardPoints: 1340,
    isSecret: false
  },
  {
    id: 'ach_269',
    title: 'Milestone 269',
    description: 'Reach a value of 2690 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2690,
    rewardPoints: 1345,
    isSecret: false
  },
  {
    id: 'ach_270',
    title: 'Milestone 270',
    description: 'Reach a value of 2700 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2700,
    rewardPoints: 1350,
    isSecret: true
  },
  {
    id: 'ach_271',
    title: 'Milestone 271',
    description: 'Reach a value of 2710 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2710,
    rewardPoints: 1355,
    isSecret: false
  },
  {
    id: 'ach_272',
    title: 'Milestone 272',
    description: 'Reach a value of 2720 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2720,
    rewardPoints: 1360,
    isSecret: false
  },
  {
    id: 'ach_273',
    title: 'Milestone 273',
    description: 'Reach a value of 2730 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2730,
    rewardPoints: 1365,
    isSecret: false
  },
  {
    id: 'ach_274',
    title: 'Milestone 274',
    description: 'Reach a value of 2740 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2740,
    rewardPoints: 1370,
    isSecret: false
  },
  {
    id: 'ach_275',
    title: 'Milestone 275',
    description: 'Reach a value of 2750 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2750,
    rewardPoints: 1375,
    isSecret: false
  },
  {
    id: 'ach_276',
    title: 'Milestone 276',
    description: 'Reach a value of 2760 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2760,
    rewardPoints: 1380,
    isSecret: false
  },
  {
    id: 'ach_277',
    title: 'Milestone 277',
    description: 'Reach a value of 2770 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2770,
    rewardPoints: 1385,
    isSecret: false
  },
  {
    id: 'ach_278',
    title: 'Milestone 278',
    description: 'Reach a value of 2780 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2780,
    rewardPoints: 1390,
    isSecret: false
  },
  {
    id: 'ach_279',
    title: 'Milestone 279',
    description: 'Reach a value of 2790 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2790,
    rewardPoints: 1395,
    isSecret: false
  },
  {
    id: 'ach_280',
    title: 'Milestone 280',
    description: 'Reach a value of 2800 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2800,
    rewardPoints: 1400,
    isSecret: true
  },
  {
    id: 'ach_281',
    title: 'Milestone 281',
    description: 'Reach a value of 2810 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2810,
    rewardPoints: 1405,
    isSecret: false
  },
  {
    id: 'ach_282',
    title: 'Milestone 282',
    description: 'Reach a value of 2820 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2820,
    rewardPoints: 1410,
    isSecret: false
  },
  {
    id: 'ach_283',
    title: 'Milestone 283',
    description: 'Reach a value of 2830 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2830,
    rewardPoints: 1415,
    isSecret: false
  },
  {
    id: 'ach_284',
    title: 'Milestone 284',
    description: 'Reach a value of 2840 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2840,
    rewardPoints: 1420,
    isSecret: false
  },
  {
    id: 'ach_285',
    title: 'Milestone 285',
    description: 'Reach a value of 2850 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2850,
    rewardPoints: 1425,
    isSecret: false
  },
  {
    id: 'ach_286',
    title: 'Milestone 286',
    description: 'Reach a value of 2860 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2860,
    rewardPoints: 1430,
    isSecret: false
  },
  {
    id: 'ach_287',
    title: 'Milestone 287',
    description: 'Reach a value of 2870 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2870,
    rewardPoints: 1435,
    isSecret: false
  },
  {
    id: 'ach_288',
    title: 'Milestone 288',
    description: 'Reach a value of 2880 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2880,
    rewardPoints: 1440,
    isSecret: false
  },
  {
    id: 'ach_289',
    title: 'Milestone 289',
    description: 'Reach a value of 2890 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2890,
    rewardPoints: 1445,
    isSecret: false
  },
  {
    id: 'ach_290',
    title: 'Milestone 290',
    description: 'Reach a value of 2900 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2900,
    rewardPoints: 1450,
    isSecret: true
  },
  {
    id: 'ach_291',
    title: 'Milestone 291',
    description: 'Reach a value of 2910 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2910,
    rewardPoints: 1455,
    isSecret: false
  },
  {
    id: 'ach_292',
    title: 'Milestone 292',
    description: 'Reach a value of 2920 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2920,
    rewardPoints: 1460,
    isSecret: false
  },
  {
    id: 'ach_293',
    title: 'Milestone 293',
    description: 'Reach a value of 2930 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2930,
    rewardPoints: 1465,
    isSecret: false
  },
  {
    id: 'ach_294',
    title: 'Milestone 294',
    description: 'Reach a value of 2940 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2940,
    rewardPoints: 1470,
    isSecret: false
  },
  {
    id: 'ach_295',
    title: 'Milestone 295',
    description: 'Reach a value of 2950 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2950,
    rewardPoints: 1475,
    isSecret: false
  },
  {
    id: 'ach_296',
    title: 'Milestone 296',
    description: 'Reach a value of 2960 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 2960,
    rewardPoints: 1480,
    isSecret: false
  },
  {
    id: 'ach_297',
    title: 'Milestone 297',
    description: 'Reach a value of 2970 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 2970,
    rewardPoints: 1485,
    isSecret: false
  },
  {
    id: 'ach_298',
    title: 'Milestone 298',
    description: 'Reach a value of 2980 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 2980,
    rewardPoints: 1490,
    isSecret: false
  },
  {
    id: 'ach_299',
    title: 'Milestone 299',
    description: 'Reach a value of 2990 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 2990,
    rewardPoints: 1495,
    isSecret: false
  },
  {
    id: 'ach_300',
    title: 'Milestone 300',
    description: 'Reach a value of 3000 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3000,
    rewardPoints: 1500,
    isSecret: true
  },
  {
    id: 'ach_301',
    title: 'Milestone 301',
    description: 'Reach a value of 3010 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3010,
    rewardPoints: 1505,
    isSecret: false
  },
  {
    id: 'ach_302',
    title: 'Milestone 302',
    description: 'Reach a value of 3020 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3020,
    rewardPoints: 1510,
    isSecret: false
  },
  {
    id: 'ach_303',
    title: 'Milestone 303',
    description: 'Reach a value of 3030 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3030,
    rewardPoints: 1515,
    isSecret: false
  },
  {
    id: 'ach_304',
    title: 'Milestone 304',
    description: 'Reach a value of 3040 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3040,
    rewardPoints: 1520,
    isSecret: false
  },
  {
    id: 'ach_305',
    title: 'Milestone 305',
    description: 'Reach a value of 3050 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3050,
    rewardPoints: 1525,
    isSecret: false
  },
  {
    id: 'ach_306',
    title: 'Milestone 306',
    description: 'Reach a value of 3060 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3060,
    rewardPoints: 1530,
    isSecret: false
  },
  {
    id: 'ach_307',
    title: 'Milestone 307',
    description: 'Reach a value of 3070 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3070,
    rewardPoints: 1535,
    isSecret: false
  },
  {
    id: 'ach_308',
    title: 'Milestone 308',
    description: 'Reach a value of 3080 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3080,
    rewardPoints: 1540,
    isSecret: false
  },
  {
    id: 'ach_309',
    title: 'Milestone 309',
    description: 'Reach a value of 3090 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3090,
    rewardPoints: 1545,
    isSecret: false
  },
  {
    id: 'ach_310',
    title: 'Milestone 310',
    description: 'Reach a value of 3100 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3100,
    rewardPoints: 1550,
    isSecret: true
  },
  {
    id: 'ach_311',
    title: 'Milestone 311',
    description: 'Reach a value of 3110 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3110,
    rewardPoints: 1555,
    isSecret: false
  },
  {
    id: 'ach_312',
    title: 'Milestone 312',
    description: 'Reach a value of 3120 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3120,
    rewardPoints: 1560,
    isSecret: false
  },
  {
    id: 'ach_313',
    title: 'Milestone 313',
    description: 'Reach a value of 3130 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3130,
    rewardPoints: 1565,
    isSecret: false
  },
  {
    id: 'ach_314',
    title: 'Milestone 314',
    description: 'Reach a value of 3140 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3140,
    rewardPoints: 1570,
    isSecret: false
  },
  {
    id: 'ach_315',
    title: 'Milestone 315',
    description: 'Reach a value of 3150 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3150,
    rewardPoints: 1575,
    isSecret: false
  },
  {
    id: 'ach_316',
    title: 'Milestone 316',
    description: 'Reach a value of 3160 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3160,
    rewardPoints: 1580,
    isSecret: false
  },
  {
    id: 'ach_317',
    title: 'Milestone 317',
    description: 'Reach a value of 3170 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3170,
    rewardPoints: 1585,
    isSecret: false
  },
  {
    id: 'ach_318',
    title: 'Milestone 318',
    description: 'Reach a value of 3180 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3180,
    rewardPoints: 1590,
    isSecret: false
  },
  {
    id: 'ach_319',
    title: 'Milestone 319',
    description: 'Reach a value of 3190 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3190,
    rewardPoints: 1595,
    isSecret: false
  },
  {
    id: 'ach_320',
    title: 'Milestone 320',
    description: 'Reach a value of 3200 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3200,
    rewardPoints: 1600,
    isSecret: true
  },
  {
    id: 'ach_321',
    title: 'Milestone 321',
    description: 'Reach a value of 3210 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3210,
    rewardPoints: 1605,
    isSecret: false
  },
  {
    id: 'ach_322',
    title: 'Milestone 322',
    description: 'Reach a value of 3220 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3220,
    rewardPoints: 1610,
    isSecret: false
  },
  {
    id: 'ach_323',
    title: 'Milestone 323',
    description: 'Reach a value of 3230 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3230,
    rewardPoints: 1615,
    isSecret: false
  },
  {
    id: 'ach_324',
    title: 'Milestone 324',
    description: 'Reach a value of 3240 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3240,
    rewardPoints: 1620,
    isSecret: false
  },
  {
    id: 'ach_325',
    title: 'Milestone 325',
    description: 'Reach a value of 3250 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3250,
    rewardPoints: 1625,
    isSecret: false
  },
  {
    id: 'ach_326',
    title: 'Milestone 326',
    description: 'Reach a value of 3260 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3260,
    rewardPoints: 1630,
    isSecret: false
  },
  {
    id: 'ach_327',
    title: 'Milestone 327',
    description: 'Reach a value of 3270 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3270,
    rewardPoints: 1635,
    isSecret: false
  },
  {
    id: 'ach_328',
    title: 'Milestone 328',
    description: 'Reach a value of 3280 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3280,
    rewardPoints: 1640,
    isSecret: false
  },
  {
    id: 'ach_329',
    title: 'Milestone 329',
    description: 'Reach a value of 3290 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3290,
    rewardPoints: 1645,
    isSecret: false
  },
  {
    id: 'ach_330',
    title: 'Milestone 330',
    description: 'Reach a value of 3300 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3300,
    rewardPoints: 1650,
    isSecret: true
  },
  {
    id: 'ach_331',
    title: 'Milestone 331',
    description: 'Reach a value of 3310 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3310,
    rewardPoints: 1655,
    isSecret: false
  },
  {
    id: 'ach_332',
    title: 'Milestone 332',
    description: 'Reach a value of 3320 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3320,
    rewardPoints: 1660,
    isSecret: false
  },
  {
    id: 'ach_333',
    title: 'Milestone 333',
    description: 'Reach a value of 3330 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3330,
    rewardPoints: 1665,
    isSecret: false
  },
  {
    id: 'ach_334',
    title: 'Milestone 334',
    description: 'Reach a value of 3340 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3340,
    rewardPoints: 1670,
    isSecret: false
  },
  {
    id: 'ach_335',
    title: 'Milestone 335',
    description: 'Reach a value of 3350 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3350,
    rewardPoints: 1675,
    isSecret: false
  },
  {
    id: 'ach_336',
    title: 'Milestone 336',
    description: 'Reach a value of 3360 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3360,
    rewardPoints: 1680,
    isSecret: false
  },
  {
    id: 'ach_337',
    title: 'Milestone 337',
    description: 'Reach a value of 3370 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3370,
    rewardPoints: 1685,
    isSecret: false
  },
  {
    id: 'ach_338',
    title: 'Milestone 338',
    description: 'Reach a value of 3380 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3380,
    rewardPoints: 1690,
    isSecret: false
  },
  {
    id: 'ach_339',
    title: 'Milestone 339',
    description: 'Reach a value of 3390 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3390,
    rewardPoints: 1695,
    isSecret: false
  },
  {
    id: 'ach_340',
    title: 'Milestone 340',
    description: 'Reach a value of 3400 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3400,
    rewardPoints: 1700,
    isSecret: true
  },
  {
    id: 'ach_341',
    title: 'Milestone 341',
    description: 'Reach a value of 3410 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3410,
    rewardPoints: 1705,
    isSecret: false
  },
  {
    id: 'ach_342',
    title: 'Milestone 342',
    description: 'Reach a value of 3420 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3420,
    rewardPoints: 1710,
    isSecret: false
  },
  {
    id: 'ach_343',
    title: 'Milestone 343',
    description: 'Reach a value of 3430 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3430,
    rewardPoints: 1715,
    isSecret: false
  },
  {
    id: 'ach_344',
    title: 'Milestone 344',
    description: 'Reach a value of 3440 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3440,
    rewardPoints: 1720,
    isSecret: false
  },
  {
    id: 'ach_345',
    title: 'Milestone 345',
    description: 'Reach a value of 3450 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3450,
    rewardPoints: 1725,
    isSecret: false
  },
  {
    id: 'ach_346',
    title: 'Milestone 346',
    description: 'Reach a value of 3460 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3460,
    rewardPoints: 1730,
    isSecret: false
  },
  {
    id: 'ach_347',
    title: 'Milestone 347',
    description: 'Reach a value of 3470 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3470,
    rewardPoints: 1735,
    isSecret: false
  },
  {
    id: 'ach_348',
    title: 'Milestone 348',
    description: 'Reach a value of 3480 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3480,
    rewardPoints: 1740,
    isSecret: false
  },
  {
    id: 'ach_349',
    title: 'Milestone 349',
    description: 'Reach a value of 3490 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3490,
    rewardPoints: 1745,
    isSecret: false
  },
  {
    id: 'ach_350',
    title: 'Milestone 350',
    description: 'Reach a value of 3500 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3500,
    rewardPoints: 1750,
    isSecret: true
  },
  {
    id: 'ach_351',
    title: 'Milestone 351',
    description: 'Reach a value of 3510 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3510,
    rewardPoints: 1755,
    isSecret: false
  },
  {
    id: 'ach_352',
    title: 'Milestone 352',
    description: 'Reach a value of 3520 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3520,
    rewardPoints: 1760,
    isSecret: false
  },
  {
    id: 'ach_353',
    title: 'Milestone 353',
    description: 'Reach a value of 3530 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3530,
    rewardPoints: 1765,
    isSecret: false
  },
  {
    id: 'ach_354',
    title: 'Milestone 354',
    description: 'Reach a value of 3540 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3540,
    rewardPoints: 1770,
    isSecret: false
  },
  {
    id: 'ach_355',
    title: 'Milestone 355',
    description: 'Reach a value of 3550 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3550,
    rewardPoints: 1775,
    isSecret: false
  },
  {
    id: 'ach_356',
    title: 'Milestone 356',
    description: 'Reach a value of 3560 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3560,
    rewardPoints: 1780,
    isSecret: false
  },
  {
    id: 'ach_357',
    title: 'Milestone 357',
    description: 'Reach a value of 3570 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3570,
    rewardPoints: 1785,
    isSecret: false
  },
  {
    id: 'ach_358',
    title: 'Milestone 358',
    description: 'Reach a value of 3580 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3580,
    rewardPoints: 1790,
    isSecret: false
  },
  {
    id: 'ach_359',
    title: 'Milestone 359',
    description: 'Reach a value of 3590 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3590,
    rewardPoints: 1795,
    isSecret: false
  },
  {
    id: 'ach_360',
    title: 'Milestone 360',
    description: 'Reach a value of 3600 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3600,
    rewardPoints: 1800,
    isSecret: true
  },
  {
    id: 'ach_361',
    title: 'Milestone 361',
    description: 'Reach a value of 3610 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3610,
    rewardPoints: 1805,
    isSecret: false
  },
  {
    id: 'ach_362',
    title: 'Milestone 362',
    description: 'Reach a value of 3620 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3620,
    rewardPoints: 1810,
    isSecret: false
  },
  {
    id: 'ach_363',
    title: 'Milestone 363',
    description: 'Reach a value of 3630 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3630,
    rewardPoints: 1815,
    isSecret: false
  },
  {
    id: 'ach_364',
    title: 'Milestone 364',
    description: 'Reach a value of 3640 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3640,
    rewardPoints: 1820,
    isSecret: false
  },
  {
    id: 'ach_365',
    title: 'Milestone 365',
    description: 'Reach a value of 3650 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3650,
    rewardPoints: 1825,
    isSecret: false
  },
  {
    id: 'ach_366',
    title: 'Milestone 366',
    description: 'Reach a value of 3660 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3660,
    rewardPoints: 1830,
    isSecret: false
  },
  {
    id: 'ach_367',
    title: 'Milestone 367',
    description: 'Reach a value of 3670 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3670,
    rewardPoints: 1835,
    isSecret: false
  },
  {
    id: 'ach_368',
    title: 'Milestone 368',
    description: 'Reach a value of 3680 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3680,
    rewardPoints: 1840,
    isSecret: false
  },
  {
    id: 'ach_369',
    title: 'Milestone 369',
    description: 'Reach a value of 3690 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3690,
    rewardPoints: 1845,
    isSecret: false
  },
  {
    id: 'ach_370',
    title: 'Milestone 370',
    description: 'Reach a value of 3700 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3700,
    rewardPoints: 1850,
    isSecret: true
  },
  {
    id: 'ach_371',
    title: 'Milestone 371',
    description: 'Reach a value of 3710 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3710,
    rewardPoints: 1855,
    isSecret: false
  },
  {
    id: 'ach_372',
    title: 'Milestone 372',
    description: 'Reach a value of 3720 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3720,
    rewardPoints: 1860,
    isSecret: false
  },
  {
    id: 'ach_373',
    title: 'Milestone 373',
    description: 'Reach a value of 3730 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3730,
    rewardPoints: 1865,
    isSecret: false
  },
  {
    id: 'ach_374',
    title: 'Milestone 374',
    description: 'Reach a value of 3740 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3740,
    rewardPoints: 1870,
    isSecret: false
  },
  {
    id: 'ach_375',
    title: 'Milestone 375',
    description: 'Reach a value of 3750 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3750,
    rewardPoints: 1875,
    isSecret: false
  },
  {
    id: 'ach_376',
    title: 'Milestone 376',
    description: 'Reach a value of 3760 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3760,
    rewardPoints: 1880,
    isSecret: false
  },
  {
    id: 'ach_377',
    title: 'Milestone 377',
    description: 'Reach a value of 3770 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3770,
    rewardPoints: 1885,
    isSecret: false
  },
  {
    id: 'ach_378',
    title: 'Milestone 378',
    description: 'Reach a value of 3780 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3780,
    rewardPoints: 1890,
    isSecret: false
  },
  {
    id: 'ach_379',
    title: 'Milestone 379',
    description: 'Reach a value of 3790 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3790,
    rewardPoints: 1895,
    isSecret: false
  },
  {
    id: 'ach_380',
    title: 'Milestone 380',
    description: 'Reach a value of 3800 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3800,
    rewardPoints: 1900,
    isSecret: true
  },
  {
    id: 'ach_381',
    title: 'Milestone 381',
    description: 'Reach a value of 3810 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3810,
    rewardPoints: 1905,
    isSecret: false
  },
  {
    id: 'ach_382',
    title: 'Milestone 382',
    description: 'Reach a value of 3820 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3820,
    rewardPoints: 1910,
    isSecret: false
  },
  {
    id: 'ach_383',
    title: 'Milestone 383',
    description: 'Reach a value of 3830 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3830,
    rewardPoints: 1915,
    isSecret: false
  },
  {
    id: 'ach_384',
    title: 'Milestone 384',
    description: 'Reach a value of 3840 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3840,
    rewardPoints: 1920,
    isSecret: false
  },
  {
    id: 'ach_385',
    title: 'Milestone 385',
    description: 'Reach a value of 3850 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3850,
    rewardPoints: 1925,
    isSecret: false
  },
  {
    id: 'ach_386',
    title: 'Milestone 386',
    description: 'Reach a value of 3860 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3860,
    rewardPoints: 1930,
    isSecret: false
  },
  {
    id: 'ach_387',
    title: 'Milestone 387',
    description: 'Reach a value of 3870 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3870,
    rewardPoints: 1935,
    isSecret: false
  },
  {
    id: 'ach_388',
    title: 'Milestone 388',
    description: 'Reach a value of 3880 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3880,
    rewardPoints: 1940,
    isSecret: false
  },
  {
    id: 'ach_389',
    title: 'Milestone 389',
    description: 'Reach a value of 3890 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3890,
    rewardPoints: 1945,
    isSecret: false
  },
  {
    id: 'ach_390',
    title: 'Milestone 390',
    description: 'Reach a value of 3900 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3900,
    rewardPoints: 1950,
    isSecret: true
  },
  {
    id: 'ach_391',
    title: 'Milestone 391',
    description: 'Reach a value of 3910 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3910,
    rewardPoints: 1955,
    isSecret: false
  },
  {
    id: 'ach_392',
    title: 'Milestone 392',
    description: 'Reach a value of 3920 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3920,
    rewardPoints: 1960,
    isSecret: false
  },
  {
    id: 'ach_393',
    title: 'Milestone 393',
    description: 'Reach a value of 3930 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3930,
    rewardPoints: 1965,
    isSecret: false
  },
  {
    id: 'ach_394',
    title: 'Milestone 394',
    description: 'Reach a value of 3940 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3940,
    rewardPoints: 1970,
    isSecret: false
  },
  {
    id: 'ach_395',
    title: 'Milestone 395',
    description: 'Reach a value of 3950 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3950,
    rewardPoints: 1975,
    isSecret: false
  },
  {
    id: 'ach_396',
    title: 'Milestone 396',
    description: 'Reach a value of 3960 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 3960,
    rewardPoints: 1980,
    isSecret: false
  },
  {
    id: 'ach_397',
    title: 'Milestone 397',
    description: 'Reach a value of 3970 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 3970,
    rewardPoints: 1985,
    isSecret: false
  },
  {
    id: 'ach_398',
    title: 'Milestone 398',
    description: 'Reach a value of 3980 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 3980,
    rewardPoints: 1990,
    isSecret: false
  },
  {
    id: 'ach_399',
    title: 'Milestone 399',
    description: 'Reach a value of 3990 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 3990,
    rewardPoints: 1995,
    isSecret: false
  },
  {
    id: 'ach_400',
    title: 'Milestone 400',
    description: 'Reach a value of 4000 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4000,
    rewardPoints: 2000,
    isSecret: true
  },
  {
    id: 'ach_401',
    title: 'Milestone 401',
    description: 'Reach a value of 4010 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4010,
    rewardPoints: 2005,
    isSecret: false
  },
  {
    id: 'ach_402',
    title: 'Milestone 402',
    description: 'Reach a value of 4020 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4020,
    rewardPoints: 2010,
    isSecret: false
  },
  {
    id: 'ach_403',
    title: 'Milestone 403',
    description: 'Reach a value of 4030 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4030,
    rewardPoints: 2015,
    isSecret: false
  },
  {
    id: 'ach_404',
    title: 'Milestone 404',
    description: 'Reach a value of 4040 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4040,
    rewardPoints: 2020,
    isSecret: false
  },
  {
    id: 'ach_405',
    title: 'Milestone 405',
    description: 'Reach a value of 4050 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4050,
    rewardPoints: 2025,
    isSecret: false
  },
  {
    id: 'ach_406',
    title: 'Milestone 406',
    description: 'Reach a value of 4060 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4060,
    rewardPoints: 2030,
    isSecret: false
  },
  {
    id: 'ach_407',
    title: 'Milestone 407',
    description: 'Reach a value of 4070 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4070,
    rewardPoints: 2035,
    isSecret: false
  },
  {
    id: 'ach_408',
    title: 'Milestone 408',
    description: 'Reach a value of 4080 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4080,
    rewardPoints: 2040,
    isSecret: false
  },
  {
    id: 'ach_409',
    title: 'Milestone 409',
    description: 'Reach a value of 4090 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4090,
    rewardPoints: 2045,
    isSecret: false
  },
  {
    id: 'ach_410',
    title: 'Milestone 410',
    description: 'Reach a value of 4100 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4100,
    rewardPoints: 2050,
    isSecret: true
  },
  {
    id: 'ach_411',
    title: 'Milestone 411',
    description: 'Reach a value of 4110 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4110,
    rewardPoints: 2055,
    isSecret: false
  },
  {
    id: 'ach_412',
    title: 'Milestone 412',
    description: 'Reach a value of 4120 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4120,
    rewardPoints: 2060,
    isSecret: false
  },
  {
    id: 'ach_413',
    title: 'Milestone 413',
    description: 'Reach a value of 4130 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4130,
    rewardPoints: 2065,
    isSecret: false
  },
  {
    id: 'ach_414',
    title: 'Milestone 414',
    description: 'Reach a value of 4140 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4140,
    rewardPoints: 2070,
    isSecret: false
  },
  {
    id: 'ach_415',
    title: 'Milestone 415',
    description: 'Reach a value of 4150 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4150,
    rewardPoints: 2075,
    isSecret: false
  },
  {
    id: 'ach_416',
    title: 'Milestone 416',
    description: 'Reach a value of 4160 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4160,
    rewardPoints: 2080,
    isSecret: false
  },
  {
    id: 'ach_417',
    title: 'Milestone 417',
    description: 'Reach a value of 4170 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4170,
    rewardPoints: 2085,
    isSecret: false
  },
  {
    id: 'ach_418',
    title: 'Milestone 418',
    description: 'Reach a value of 4180 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4180,
    rewardPoints: 2090,
    isSecret: false
  },
  {
    id: 'ach_419',
    title: 'Milestone 419',
    description: 'Reach a value of 4190 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4190,
    rewardPoints: 2095,
    isSecret: false
  },
  {
    id: 'ach_420',
    title: 'Milestone 420',
    description: 'Reach a value of 4200 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4200,
    rewardPoints: 2100,
    isSecret: true
  },
  {
    id: 'ach_421',
    title: 'Milestone 421',
    description: 'Reach a value of 4210 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4210,
    rewardPoints: 2105,
    isSecret: false
  },
  {
    id: 'ach_422',
    title: 'Milestone 422',
    description: 'Reach a value of 4220 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4220,
    rewardPoints: 2110,
    isSecret: false
  },
  {
    id: 'ach_423',
    title: 'Milestone 423',
    description: 'Reach a value of 4230 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4230,
    rewardPoints: 2115,
    isSecret: false
  },
  {
    id: 'ach_424',
    title: 'Milestone 424',
    description: 'Reach a value of 4240 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4240,
    rewardPoints: 2120,
    isSecret: false
  },
  {
    id: 'ach_425',
    title: 'Milestone 425',
    description: 'Reach a value of 4250 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4250,
    rewardPoints: 2125,
    isSecret: false
  },
  {
    id: 'ach_426',
    title: 'Milestone 426',
    description: 'Reach a value of 4260 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4260,
    rewardPoints: 2130,
    isSecret: false
  },
  {
    id: 'ach_427',
    title: 'Milestone 427',
    description: 'Reach a value of 4270 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4270,
    rewardPoints: 2135,
    isSecret: false
  },
  {
    id: 'ach_428',
    title: 'Milestone 428',
    description: 'Reach a value of 4280 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4280,
    rewardPoints: 2140,
    isSecret: false
  },
  {
    id: 'ach_429',
    title: 'Milestone 429',
    description: 'Reach a value of 4290 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4290,
    rewardPoints: 2145,
    isSecret: false
  },
  {
    id: 'ach_430',
    title: 'Milestone 430',
    description: 'Reach a value of 4300 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4300,
    rewardPoints: 2150,
    isSecret: true
  },
  {
    id: 'ach_431',
    title: 'Milestone 431',
    description: 'Reach a value of 4310 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4310,
    rewardPoints: 2155,
    isSecret: false
  },
  {
    id: 'ach_432',
    title: 'Milestone 432',
    description: 'Reach a value of 4320 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4320,
    rewardPoints: 2160,
    isSecret: false
  },
  {
    id: 'ach_433',
    title: 'Milestone 433',
    description: 'Reach a value of 4330 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4330,
    rewardPoints: 2165,
    isSecret: false
  },
  {
    id: 'ach_434',
    title: 'Milestone 434',
    description: 'Reach a value of 4340 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4340,
    rewardPoints: 2170,
    isSecret: false
  },
  {
    id: 'ach_435',
    title: 'Milestone 435',
    description: 'Reach a value of 4350 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4350,
    rewardPoints: 2175,
    isSecret: false
  },
  {
    id: 'ach_436',
    title: 'Milestone 436',
    description: 'Reach a value of 4360 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4360,
    rewardPoints: 2180,
    isSecret: false
  },
  {
    id: 'ach_437',
    title: 'Milestone 437',
    description: 'Reach a value of 4370 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4370,
    rewardPoints: 2185,
    isSecret: false
  },
  {
    id: 'ach_438',
    title: 'Milestone 438',
    description: 'Reach a value of 4380 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4380,
    rewardPoints: 2190,
    isSecret: false
  },
  {
    id: 'ach_439',
    title: 'Milestone 439',
    description: 'Reach a value of 4390 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4390,
    rewardPoints: 2195,
    isSecret: false
  },
  {
    id: 'ach_440',
    title: 'Milestone 440',
    description: 'Reach a value of 4400 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4400,
    rewardPoints: 2200,
    isSecret: true
  },
  {
    id: 'ach_441',
    title: 'Milestone 441',
    description: 'Reach a value of 4410 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4410,
    rewardPoints: 2205,
    isSecret: false
  },
  {
    id: 'ach_442',
    title: 'Milestone 442',
    description: 'Reach a value of 4420 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4420,
    rewardPoints: 2210,
    isSecret: false
  },
  {
    id: 'ach_443',
    title: 'Milestone 443',
    description: 'Reach a value of 4430 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4430,
    rewardPoints: 2215,
    isSecret: false
  },
  {
    id: 'ach_444',
    title: 'Milestone 444',
    description: 'Reach a value of 4440 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4440,
    rewardPoints: 2220,
    isSecret: false
  },
  {
    id: 'ach_445',
    title: 'Milestone 445',
    description: 'Reach a value of 4450 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4450,
    rewardPoints: 2225,
    isSecret: false
  },
  {
    id: 'ach_446',
    title: 'Milestone 446',
    description: 'Reach a value of 4460 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4460,
    rewardPoints: 2230,
    isSecret: false
  },
  {
    id: 'ach_447',
    title: 'Milestone 447',
    description: 'Reach a value of 4470 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4470,
    rewardPoints: 2235,
    isSecret: false
  },
  {
    id: 'ach_448',
    title: 'Milestone 448',
    description: 'Reach a value of 4480 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4480,
    rewardPoints: 2240,
    isSecret: false
  },
  {
    id: 'ach_449',
    title: 'Milestone 449',
    description: 'Reach a value of 4490 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4490,
    rewardPoints: 2245,
    isSecret: false
  },
  {
    id: 'ach_450',
    title: 'Milestone 450',
    description: 'Reach a value of 4500 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4500,
    rewardPoints: 2250,
    isSecret: true
  },
  {
    id: 'ach_451',
    title: 'Milestone 451',
    description: 'Reach a value of 4510 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4510,
    rewardPoints: 2255,
    isSecret: false
  },
  {
    id: 'ach_452',
    title: 'Milestone 452',
    description: 'Reach a value of 4520 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4520,
    rewardPoints: 2260,
    isSecret: false
  },
  {
    id: 'ach_453',
    title: 'Milestone 453',
    description: 'Reach a value of 4530 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4530,
    rewardPoints: 2265,
    isSecret: false
  },
  {
    id: 'ach_454',
    title: 'Milestone 454',
    description: 'Reach a value of 4540 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4540,
    rewardPoints: 2270,
    isSecret: false
  },
  {
    id: 'ach_455',
    title: 'Milestone 455',
    description: 'Reach a value of 4550 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4550,
    rewardPoints: 2275,
    isSecret: false
  },
  {
    id: 'ach_456',
    title: 'Milestone 456',
    description: 'Reach a value of 4560 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4560,
    rewardPoints: 2280,
    isSecret: false
  },
  {
    id: 'ach_457',
    title: 'Milestone 457',
    description: 'Reach a value of 4570 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4570,
    rewardPoints: 2285,
    isSecret: false
  },
  {
    id: 'ach_458',
    title: 'Milestone 458',
    description: 'Reach a value of 4580 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4580,
    rewardPoints: 2290,
    isSecret: false
  },
  {
    id: 'ach_459',
    title: 'Milestone 459',
    description: 'Reach a value of 4590 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4590,
    rewardPoints: 2295,
    isSecret: false
  },
  {
    id: 'ach_460',
    title: 'Milestone 460',
    description: 'Reach a value of 4600 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4600,
    rewardPoints: 2300,
    isSecret: true
  },
  {
    id: 'ach_461',
    title: 'Milestone 461',
    description: 'Reach a value of 4610 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4610,
    rewardPoints: 2305,
    isSecret: false
  },
  {
    id: 'ach_462',
    title: 'Milestone 462',
    description: 'Reach a value of 4620 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4620,
    rewardPoints: 2310,
    isSecret: false
  },
  {
    id: 'ach_463',
    title: 'Milestone 463',
    description: 'Reach a value of 4630 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4630,
    rewardPoints: 2315,
    isSecret: false
  },
  {
    id: 'ach_464',
    title: 'Milestone 464',
    description: 'Reach a value of 4640 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4640,
    rewardPoints: 2320,
    isSecret: false
  },
  {
    id: 'ach_465',
    title: 'Milestone 465',
    description: 'Reach a value of 4650 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4650,
    rewardPoints: 2325,
    isSecret: false
  },
  {
    id: 'ach_466',
    title: 'Milestone 466',
    description: 'Reach a value of 4660 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4660,
    rewardPoints: 2330,
    isSecret: false
  },
  {
    id: 'ach_467',
    title: 'Milestone 467',
    description: 'Reach a value of 4670 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4670,
    rewardPoints: 2335,
    isSecret: false
  },
  {
    id: 'ach_468',
    title: 'Milestone 468',
    description: 'Reach a value of 4680 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4680,
    rewardPoints: 2340,
    isSecret: false
  },
  {
    id: 'ach_469',
    title: 'Milestone 469',
    description: 'Reach a value of 4690 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4690,
    rewardPoints: 2345,
    isSecret: false
  },
  {
    id: 'ach_470',
    title: 'Milestone 470',
    description: 'Reach a value of 4700 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4700,
    rewardPoints: 2350,
    isSecret: true
  },
  {
    id: 'ach_471',
    title: 'Milestone 471',
    description: 'Reach a value of 4710 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4710,
    rewardPoints: 2355,
    isSecret: false
  },
  {
    id: 'ach_472',
    title: 'Milestone 472',
    description: 'Reach a value of 4720 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4720,
    rewardPoints: 2360,
    isSecret: false
  },
  {
    id: 'ach_473',
    title: 'Milestone 473',
    description: 'Reach a value of 4730 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4730,
    rewardPoints: 2365,
    isSecret: false
  },
  {
    id: 'ach_474',
    title: 'Milestone 474',
    description: 'Reach a value of 4740 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4740,
    rewardPoints: 2370,
    isSecret: false
  },
  {
    id: 'ach_475',
    title: 'Milestone 475',
    description: 'Reach a value of 4750 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4750,
    rewardPoints: 2375,
    isSecret: false
  },
  {
    id: 'ach_476',
    title: 'Milestone 476',
    description: 'Reach a value of 4760 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4760,
    rewardPoints: 2380,
    isSecret: false
  },
  {
    id: 'ach_477',
    title: 'Milestone 477',
    description: 'Reach a value of 4770 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4770,
    rewardPoints: 2385,
    isSecret: false
  },
  {
    id: 'ach_478',
    title: 'Milestone 478',
    description: 'Reach a value of 4780 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4780,
    rewardPoints: 2390,
    isSecret: false
  },
  {
    id: 'ach_479',
    title: 'Milestone 479',
    description: 'Reach a value of 4790 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4790,
    rewardPoints: 2395,
    isSecret: false
  },
  {
    id: 'ach_480',
    title: 'Milestone 480',
    description: 'Reach a value of 4800 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4800,
    rewardPoints: 2400,
    isSecret: true
  },
  {
    id: 'ach_481',
    title: 'Milestone 481',
    description: 'Reach a value of 4810 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4810,
    rewardPoints: 2405,
    isSecret: false
  },
  {
    id: 'ach_482',
    title: 'Milestone 482',
    description: 'Reach a value of 4820 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4820,
    rewardPoints: 2410,
    isSecret: false
  },
  {
    id: 'ach_483',
    title: 'Milestone 483',
    description: 'Reach a value of 4830 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4830,
    rewardPoints: 2415,
    isSecret: false
  },
  {
    id: 'ach_484',
    title: 'Milestone 484',
    description: 'Reach a value of 4840 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4840,
    rewardPoints: 2420,
    isSecret: false
  },
  {
    id: 'ach_485',
    title: 'Milestone 485',
    description: 'Reach a value of 4850 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4850,
    rewardPoints: 2425,
    isSecret: false
  },
  {
    id: 'ach_486',
    title: 'Milestone 486',
    description: 'Reach a value of 4860 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4860,
    rewardPoints: 2430,
    isSecret: false
  },
  {
    id: 'ach_487',
    title: 'Milestone 487',
    description: 'Reach a value of 4870 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4870,
    rewardPoints: 2435,
    isSecret: false
  },
  {
    id: 'ach_488',
    title: 'Milestone 488',
    description: 'Reach a value of 4880 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4880,
    rewardPoints: 2440,
    isSecret: false
  },
  {
    id: 'ach_489',
    title: 'Milestone 489',
    description: 'Reach a value of 4890 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4890,
    rewardPoints: 2445,
    isSecret: false
  },
  {
    id: 'ach_490',
    title: 'Milestone 490',
    description: 'Reach a value of 4900 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4900,
    rewardPoints: 2450,
    isSecret: true
  },
  {
    id: 'ach_491',
    title: 'Milestone 491',
    description: 'Reach a value of 4910 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4910,
    rewardPoints: 2455,
    isSecret: false
  },
  {
    id: 'ach_492',
    title: 'Milestone 492',
    description: 'Reach a value of 4920 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4920,
    rewardPoints: 2460,
    isSecret: false
  },
  {
    id: 'ach_493',
    title: 'Milestone 493',
    description: 'Reach a value of 4930 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4930,
    rewardPoints: 2465,
    isSecret: false
  },
  {
    id: 'ach_494',
    title: 'Milestone 494',
    description: 'Reach a value of 4940 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4940,
    rewardPoints: 2470,
    isSecret: false
  },
  {
    id: 'ach_495',
    title: 'Milestone 495',
    description: 'Reach a value of 4950 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4950,
    rewardPoints: 2475,
    isSecret: false
  },
  {
    id: 'ach_496',
    title: 'Milestone 496',
    description: 'Reach a value of 4960 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 4960,
    rewardPoints: 2480,
    isSecret: false
  },
  {
    id: 'ach_497',
    title: 'Milestone 497',
    description: 'Reach a value of 4970 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 4970,
    rewardPoints: 2485,
    isSecret: false
  },
  {
    id: 'ach_498',
    title: 'Milestone 498',
    description: 'Reach a value of 4980 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 4980,
    rewardPoints: 2490,
    isSecret: false
  },
  {
    id: 'ach_499',
    title: 'Milestone 499',
    description: 'Reach a value of 4990 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 4990,
    rewardPoints: 2495,
    isSecret: false
  },
  {
    id: 'ach_500',
    title: 'Milestone 500',
    description: 'Reach a value of 5000 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5000,
    rewardPoints: 2500,
    isSecret: true
  },
  {
    id: 'ach_501',
    title: 'Milestone 501',
    description: 'Reach a value of 5010 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5010,
    rewardPoints: 2505,
    isSecret: false
  },
  {
    id: 'ach_502',
    title: 'Milestone 502',
    description: 'Reach a value of 5020 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5020,
    rewardPoints: 2510,
    isSecret: false
  },
  {
    id: 'ach_503',
    title: 'Milestone 503',
    description: 'Reach a value of 5030 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5030,
    rewardPoints: 2515,
    isSecret: false
  },
  {
    id: 'ach_504',
    title: 'Milestone 504',
    description: 'Reach a value of 5040 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5040,
    rewardPoints: 2520,
    isSecret: false
  },
  {
    id: 'ach_505',
    title: 'Milestone 505',
    description: 'Reach a value of 5050 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5050,
    rewardPoints: 2525,
    isSecret: false
  },
  {
    id: 'ach_506',
    title: 'Milestone 506',
    description: 'Reach a value of 5060 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5060,
    rewardPoints: 2530,
    isSecret: false
  },
  {
    id: 'ach_507',
    title: 'Milestone 507',
    description: 'Reach a value of 5070 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5070,
    rewardPoints: 2535,
    isSecret: false
  },
  {
    id: 'ach_508',
    title: 'Milestone 508',
    description: 'Reach a value of 5080 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5080,
    rewardPoints: 2540,
    isSecret: false
  },
  {
    id: 'ach_509',
    title: 'Milestone 509',
    description: 'Reach a value of 5090 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5090,
    rewardPoints: 2545,
    isSecret: false
  },
  {
    id: 'ach_510',
    title: 'Milestone 510',
    description: 'Reach a value of 5100 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5100,
    rewardPoints: 2550,
    isSecret: true
  },
  {
    id: 'ach_511',
    title: 'Milestone 511',
    description: 'Reach a value of 5110 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5110,
    rewardPoints: 2555,
    isSecret: false
  },
  {
    id: 'ach_512',
    title: 'Milestone 512',
    description: 'Reach a value of 5120 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5120,
    rewardPoints: 2560,
    isSecret: false
  },
  {
    id: 'ach_513',
    title: 'Milestone 513',
    description: 'Reach a value of 5130 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5130,
    rewardPoints: 2565,
    isSecret: false
  },
  {
    id: 'ach_514',
    title: 'Milestone 514',
    description: 'Reach a value of 5140 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5140,
    rewardPoints: 2570,
    isSecret: false
  },
  {
    id: 'ach_515',
    title: 'Milestone 515',
    description: 'Reach a value of 5150 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5150,
    rewardPoints: 2575,
    isSecret: false
  },
  {
    id: 'ach_516',
    title: 'Milestone 516',
    description: 'Reach a value of 5160 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5160,
    rewardPoints: 2580,
    isSecret: false
  },
  {
    id: 'ach_517',
    title: 'Milestone 517',
    description: 'Reach a value of 5170 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5170,
    rewardPoints: 2585,
    isSecret: false
  },
  {
    id: 'ach_518',
    title: 'Milestone 518',
    description: 'Reach a value of 5180 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5180,
    rewardPoints: 2590,
    isSecret: false
  },
  {
    id: 'ach_519',
    title: 'Milestone 519',
    description: 'Reach a value of 5190 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5190,
    rewardPoints: 2595,
    isSecret: false
  },
  {
    id: 'ach_520',
    title: 'Milestone 520',
    description: 'Reach a value of 5200 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5200,
    rewardPoints: 2600,
    isSecret: true
  },
  {
    id: 'ach_521',
    title: 'Milestone 521',
    description: 'Reach a value of 5210 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5210,
    rewardPoints: 2605,
    isSecret: false
  },
  {
    id: 'ach_522',
    title: 'Milestone 522',
    description: 'Reach a value of 5220 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5220,
    rewardPoints: 2610,
    isSecret: false
  },
  {
    id: 'ach_523',
    title: 'Milestone 523',
    description: 'Reach a value of 5230 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5230,
    rewardPoints: 2615,
    isSecret: false
  },
  {
    id: 'ach_524',
    title: 'Milestone 524',
    description: 'Reach a value of 5240 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5240,
    rewardPoints: 2620,
    isSecret: false
  },
  {
    id: 'ach_525',
    title: 'Milestone 525',
    description: 'Reach a value of 5250 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5250,
    rewardPoints: 2625,
    isSecret: false
  },
  {
    id: 'ach_526',
    title: 'Milestone 526',
    description: 'Reach a value of 5260 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5260,
    rewardPoints: 2630,
    isSecret: false
  },
  {
    id: 'ach_527',
    title: 'Milestone 527',
    description: 'Reach a value of 5270 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5270,
    rewardPoints: 2635,
    isSecret: false
  },
  {
    id: 'ach_528',
    title: 'Milestone 528',
    description: 'Reach a value of 5280 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5280,
    rewardPoints: 2640,
    isSecret: false
  },
  {
    id: 'ach_529',
    title: 'Milestone 529',
    description: 'Reach a value of 5290 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5290,
    rewardPoints: 2645,
    isSecret: false
  },
  {
    id: 'ach_530',
    title: 'Milestone 530',
    description: 'Reach a value of 5300 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5300,
    rewardPoints: 2650,
    isSecret: true
  },
  {
    id: 'ach_531',
    title: 'Milestone 531',
    description: 'Reach a value of 5310 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5310,
    rewardPoints: 2655,
    isSecret: false
  },
  {
    id: 'ach_532',
    title: 'Milestone 532',
    description: 'Reach a value of 5320 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5320,
    rewardPoints: 2660,
    isSecret: false
  },
  {
    id: 'ach_533',
    title: 'Milestone 533',
    description: 'Reach a value of 5330 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5330,
    rewardPoints: 2665,
    isSecret: false
  },
  {
    id: 'ach_534',
    title: 'Milestone 534',
    description: 'Reach a value of 5340 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5340,
    rewardPoints: 2670,
    isSecret: false
  },
  {
    id: 'ach_535',
    title: 'Milestone 535',
    description: 'Reach a value of 5350 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5350,
    rewardPoints: 2675,
    isSecret: false
  },
  {
    id: 'ach_536',
    title: 'Milestone 536',
    description: 'Reach a value of 5360 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5360,
    rewardPoints: 2680,
    isSecret: false
  },
  {
    id: 'ach_537',
    title: 'Milestone 537',
    description: 'Reach a value of 5370 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5370,
    rewardPoints: 2685,
    isSecret: false
  },
  {
    id: 'ach_538',
    title: 'Milestone 538',
    description: 'Reach a value of 5380 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5380,
    rewardPoints: 2690,
    isSecret: false
  },
  {
    id: 'ach_539',
    title: 'Milestone 539',
    description: 'Reach a value of 5390 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5390,
    rewardPoints: 2695,
    isSecret: false
  },
  {
    id: 'ach_540',
    title: 'Milestone 540',
    description: 'Reach a value of 5400 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5400,
    rewardPoints: 2700,
    isSecret: true
  },
  {
    id: 'ach_541',
    title: 'Milestone 541',
    description: 'Reach a value of 5410 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5410,
    rewardPoints: 2705,
    isSecret: false
  },
  {
    id: 'ach_542',
    title: 'Milestone 542',
    description: 'Reach a value of 5420 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5420,
    rewardPoints: 2710,
    isSecret: false
  },
  {
    id: 'ach_543',
    title: 'Milestone 543',
    description: 'Reach a value of 5430 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5430,
    rewardPoints: 2715,
    isSecret: false
  },
  {
    id: 'ach_544',
    title: 'Milestone 544',
    description: 'Reach a value of 5440 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5440,
    rewardPoints: 2720,
    isSecret: false
  },
  {
    id: 'ach_545',
    title: 'Milestone 545',
    description: 'Reach a value of 5450 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5450,
    rewardPoints: 2725,
    isSecret: false
  },
  {
    id: 'ach_546',
    title: 'Milestone 546',
    description: 'Reach a value of 5460 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5460,
    rewardPoints: 2730,
    isSecret: false
  },
  {
    id: 'ach_547',
    title: 'Milestone 547',
    description: 'Reach a value of 5470 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5470,
    rewardPoints: 2735,
    isSecret: false
  },
  {
    id: 'ach_548',
    title: 'Milestone 548',
    description: 'Reach a value of 5480 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5480,
    rewardPoints: 2740,
    isSecret: false
  },
  {
    id: 'ach_549',
    title: 'Milestone 549',
    description: 'Reach a value of 5490 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5490,
    rewardPoints: 2745,
    isSecret: false
  },
  {
    id: 'ach_550',
    title: 'Milestone 550',
    description: 'Reach a value of 5500 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5500,
    rewardPoints: 2750,
    isSecret: true
  },
  {
    id: 'ach_551',
    title: 'Milestone 551',
    description: 'Reach a value of 5510 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5510,
    rewardPoints: 2755,
    isSecret: false
  },
  {
    id: 'ach_552',
    title: 'Milestone 552',
    description: 'Reach a value of 5520 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5520,
    rewardPoints: 2760,
    isSecret: false
  },
  {
    id: 'ach_553',
    title: 'Milestone 553',
    description: 'Reach a value of 5530 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5530,
    rewardPoints: 2765,
    isSecret: false
  },
  {
    id: 'ach_554',
    title: 'Milestone 554',
    description: 'Reach a value of 5540 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5540,
    rewardPoints: 2770,
    isSecret: false
  },
  {
    id: 'ach_555',
    title: 'Milestone 555',
    description: 'Reach a value of 5550 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5550,
    rewardPoints: 2775,
    isSecret: false
  },
  {
    id: 'ach_556',
    title: 'Milestone 556',
    description: 'Reach a value of 5560 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5560,
    rewardPoints: 2780,
    isSecret: false
  },
  {
    id: 'ach_557',
    title: 'Milestone 557',
    description: 'Reach a value of 5570 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5570,
    rewardPoints: 2785,
    isSecret: false
  },
  {
    id: 'ach_558',
    title: 'Milestone 558',
    description: 'Reach a value of 5580 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5580,
    rewardPoints: 2790,
    isSecret: false
  },
  {
    id: 'ach_559',
    title: 'Milestone 559',
    description: 'Reach a value of 5590 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5590,
    rewardPoints: 2795,
    isSecret: false
  },
  {
    id: 'ach_560',
    title: 'Milestone 560',
    description: 'Reach a value of 5600 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5600,
    rewardPoints: 2800,
    isSecret: true
  },
  {
    id: 'ach_561',
    title: 'Milestone 561',
    description: 'Reach a value of 5610 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5610,
    rewardPoints: 2805,
    isSecret: false
  },
  {
    id: 'ach_562',
    title: 'Milestone 562',
    description: 'Reach a value of 5620 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5620,
    rewardPoints: 2810,
    isSecret: false
  },
  {
    id: 'ach_563',
    title: 'Milestone 563',
    description: 'Reach a value of 5630 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5630,
    rewardPoints: 2815,
    isSecret: false
  },
  {
    id: 'ach_564',
    title: 'Milestone 564',
    description: 'Reach a value of 5640 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5640,
    rewardPoints: 2820,
    isSecret: false
  },
  {
    id: 'ach_565',
    title: 'Milestone 565',
    description: 'Reach a value of 5650 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5650,
    rewardPoints: 2825,
    isSecret: false
  },
  {
    id: 'ach_566',
    title: 'Milestone 566',
    description: 'Reach a value of 5660 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5660,
    rewardPoints: 2830,
    isSecret: false
  },
  {
    id: 'ach_567',
    title: 'Milestone 567',
    description: 'Reach a value of 5670 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5670,
    rewardPoints: 2835,
    isSecret: false
  },
  {
    id: 'ach_568',
    title: 'Milestone 568',
    description: 'Reach a value of 5680 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5680,
    rewardPoints: 2840,
    isSecret: false
  },
  {
    id: 'ach_569',
    title: 'Milestone 569',
    description: 'Reach a value of 5690 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5690,
    rewardPoints: 2845,
    isSecret: false
  },
  {
    id: 'ach_570',
    title: 'Milestone 570',
    description: 'Reach a value of 5700 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5700,
    rewardPoints: 2850,
    isSecret: true
  },
  {
    id: 'ach_571',
    title: 'Milestone 571',
    description: 'Reach a value of 5710 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5710,
    rewardPoints: 2855,
    isSecret: false
  },
  {
    id: 'ach_572',
    title: 'Milestone 572',
    description: 'Reach a value of 5720 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5720,
    rewardPoints: 2860,
    isSecret: false
  },
  {
    id: 'ach_573',
    title: 'Milestone 573',
    description: 'Reach a value of 5730 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5730,
    rewardPoints: 2865,
    isSecret: false
  },
  {
    id: 'ach_574',
    title: 'Milestone 574',
    description: 'Reach a value of 5740 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5740,
    rewardPoints: 2870,
    isSecret: false
  },
  {
    id: 'ach_575',
    title: 'Milestone 575',
    description: 'Reach a value of 5750 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5750,
    rewardPoints: 2875,
    isSecret: false
  },
  {
    id: 'ach_576',
    title: 'Milestone 576',
    description: 'Reach a value of 5760 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5760,
    rewardPoints: 2880,
    isSecret: false
  },
  {
    id: 'ach_577',
    title: 'Milestone 577',
    description: 'Reach a value of 5770 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5770,
    rewardPoints: 2885,
    isSecret: false
  },
  {
    id: 'ach_578',
    title: 'Milestone 578',
    description: 'Reach a value of 5780 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5780,
    rewardPoints: 2890,
    isSecret: false
  },
  {
    id: 'ach_579',
    title: 'Milestone 579',
    description: 'Reach a value of 5790 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5790,
    rewardPoints: 2895,
    isSecret: false
  },
  {
    id: 'ach_580',
    title: 'Milestone 580',
    description: 'Reach a value of 5800 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5800,
    rewardPoints: 2900,
    isSecret: true
  },
  {
    id: 'ach_581',
    title: 'Milestone 581',
    description: 'Reach a value of 5810 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5810,
    rewardPoints: 2905,
    isSecret: false
  },
  {
    id: 'ach_582',
    title: 'Milestone 582',
    description: 'Reach a value of 5820 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5820,
    rewardPoints: 2910,
    isSecret: false
  },
  {
    id: 'ach_583',
    title: 'Milestone 583',
    description: 'Reach a value of 5830 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5830,
    rewardPoints: 2915,
    isSecret: false
  },
  {
    id: 'ach_584',
    title: 'Milestone 584',
    description: 'Reach a value of 5840 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5840,
    rewardPoints: 2920,
    isSecret: false
  },
  {
    id: 'ach_585',
    title: 'Milestone 585',
    description: 'Reach a value of 5850 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5850,
    rewardPoints: 2925,
    isSecret: false
  },
  {
    id: 'ach_586',
    title: 'Milestone 586',
    description: 'Reach a value of 5860 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5860,
    rewardPoints: 2930,
    isSecret: false
  },
  {
    id: 'ach_587',
    title: 'Milestone 587',
    description: 'Reach a value of 5870 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5870,
    rewardPoints: 2935,
    isSecret: false
  },
  {
    id: 'ach_588',
    title: 'Milestone 588',
    description: 'Reach a value of 5880 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5880,
    rewardPoints: 2940,
    isSecret: false
  },
  {
    id: 'ach_589',
    title: 'Milestone 589',
    description: 'Reach a value of 5890 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5890,
    rewardPoints: 2945,
    isSecret: false
  },
  {
    id: 'ach_590',
    title: 'Milestone 590',
    description: 'Reach a value of 5900 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5900,
    rewardPoints: 2950,
    isSecret: true
  },
  {
    id: 'ach_591',
    title: 'Milestone 591',
    description: 'Reach a value of 5910 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5910,
    rewardPoints: 2955,
    isSecret: false
  },
  {
    id: 'ach_592',
    title: 'Milestone 592',
    description: 'Reach a value of 5920 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5920,
    rewardPoints: 2960,
    isSecret: false
  },
  {
    id: 'ach_593',
    title: 'Milestone 593',
    description: 'Reach a value of 5930 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5930,
    rewardPoints: 2965,
    isSecret: false
  },
  {
    id: 'ach_594',
    title: 'Milestone 594',
    description: 'Reach a value of 5940 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5940,
    rewardPoints: 2970,
    isSecret: false
  },
  {
    id: 'ach_595',
    title: 'Milestone 595',
    description: 'Reach a value of 5950 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5950,
    rewardPoints: 2975,
    isSecret: false
  },
  {
    id: 'ach_596',
    title: 'Milestone 596',
    description: 'Reach a value of 5960 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 5960,
    rewardPoints: 2980,
    isSecret: false
  },
  {
    id: 'ach_597',
    title: 'Milestone 597',
    description: 'Reach a value of 5970 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 5970,
    rewardPoints: 2985,
    isSecret: false
  },
  {
    id: 'ach_598',
    title: 'Milestone 598',
    description: 'Reach a value of 5980 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 5980,
    rewardPoints: 2990,
    isSecret: false
  },
  {
    id: 'ach_599',
    title: 'Milestone 599',
    description: 'Reach a value of 5990 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 5990,
    rewardPoints: 2995,
    isSecret: false
  },
  {
    id: 'ach_600',
    title: 'Milestone 600',
    description: 'Reach a value of 6000 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6000,
    rewardPoints: 3000,
    isSecret: true
  },
  {
    id: 'ach_601',
    title: 'Milestone 601',
    description: 'Reach a value of 6010 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6010,
    rewardPoints: 3005,
    isSecret: false
  },
  {
    id: 'ach_602',
    title: 'Milestone 602',
    description: 'Reach a value of 6020 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6020,
    rewardPoints: 3010,
    isSecret: false
  },
  {
    id: 'ach_603',
    title: 'Milestone 603',
    description: 'Reach a value of 6030 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6030,
    rewardPoints: 3015,
    isSecret: false
  },
  {
    id: 'ach_604',
    title: 'Milestone 604',
    description: 'Reach a value of 6040 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6040,
    rewardPoints: 3020,
    isSecret: false
  },
  {
    id: 'ach_605',
    title: 'Milestone 605',
    description: 'Reach a value of 6050 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6050,
    rewardPoints: 3025,
    isSecret: false
  },
  {
    id: 'ach_606',
    title: 'Milestone 606',
    description: 'Reach a value of 6060 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6060,
    rewardPoints: 3030,
    isSecret: false
  },
  {
    id: 'ach_607',
    title: 'Milestone 607',
    description: 'Reach a value of 6070 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6070,
    rewardPoints: 3035,
    isSecret: false
  },
  {
    id: 'ach_608',
    title: 'Milestone 608',
    description: 'Reach a value of 6080 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6080,
    rewardPoints: 3040,
    isSecret: false
  },
  {
    id: 'ach_609',
    title: 'Milestone 609',
    description: 'Reach a value of 6090 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6090,
    rewardPoints: 3045,
    isSecret: false
  },
  {
    id: 'ach_610',
    title: 'Milestone 610',
    description: 'Reach a value of 6100 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6100,
    rewardPoints: 3050,
    isSecret: true
  },
  {
    id: 'ach_611',
    title: 'Milestone 611',
    description: 'Reach a value of 6110 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6110,
    rewardPoints: 3055,
    isSecret: false
  },
  {
    id: 'ach_612',
    title: 'Milestone 612',
    description: 'Reach a value of 6120 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6120,
    rewardPoints: 3060,
    isSecret: false
  },
  {
    id: 'ach_613',
    title: 'Milestone 613',
    description: 'Reach a value of 6130 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6130,
    rewardPoints: 3065,
    isSecret: false
  },
  {
    id: 'ach_614',
    title: 'Milestone 614',
    description: 'Reach a value of 6140 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6140,
    rewardPoints: 3070,
    isSecret: false
  },
  {
    id: 'ach_615',
    title: 'Milestone 615',
    description: 'Reach a value of 6150 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6150,
    rewardPoints: 3075,
    isSecret: false
  },
  {
    id: 'ach_616',
    title: 'Milestone 616',
    description: 'Reach a value of 6160 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6160,
    rewardPoints: 3080,
    isSecret: false
  },
  {
    id: 'ach_617',
    title: 'Milestone 617',
    description: 'Reach a value of 6170 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6170,
    rewardPoints: 3085,
    isSecret: false
  },
  {
    id: 'ach_618',
    title: 'Milestone 618',
    description: 'Reach a value of 6180 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6180,
    rewardPoints: 3090,
    isSecret: false
  },
  {
    id: 'ach_619',
    title: 'Milestone 619',
    description: 'Reach a value of 6190 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6190,
    rewardPoints: 3095,
    isSecret: false
  },
  {
    id: 'ach_620',
    title: 'Milestone 620',
    description: 'Reach a value of 6200 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6200,
    rewardPoints: 3100,
    isSecret: true
  },
  {
    id: 'ach_621',
    title: 'Milestone 621',
    description: 'Reach a value of 6210 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6210,
    rewardPoints: 3105,
    isSecret: false
  },
  {
    id: 'ach_622',
    title: 'Milestone 622',
    description: 'Reach a value of 6220 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6220,
    rewardPoints: 3110,
    isSecret: false
  },
  {
    id: 'ach_623',
    title: 'Milestone 623',
    description: 'Reach a value of 6230 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6230,
    rewardPoints: 3115,
    isSecret: false
  },
  {
    id: 'ach_624',
    title: 'Milestone 624',
    description: 'Reach a value of 6240 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6240,
    rewardPoints: 3120,
    isSecret: false
  },
  {
    id: 'ach_625',
    title: 'Milestone 625',
    description: 'Reach a value of 6250 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6250,
    rewardPoints: 3125,
    isSecret: false
  },
  {
    id: 'ach_626',
    title: 'Milestone 626',
    description: 'Reach a value of 6260 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6260,
    rewardPoints: 3130,
    isSecret: false
  },
  {
    id: 'ach_627',
    title: 'Milestone 627',
    description: 'Reach a value of 6270 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6270,
    rewardPoints: 3135,
    isSecret: false
  },
  {
    id: 'ach_628',
    title: 'Milestone 628',
    description: 'Reach a value of 6280 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6280,
    rewardPoints: 3140,
    isSecret: false
  },
  {
    id: 'ach_629',
    title: 'Milestone 629',
    description: 'Reach a value of 6290 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6290,
    rewardPoints: 3145,
    isSecret: false
  },
  {
    id: 'ach_630',
    title: 'Milestone 630',
    description: 'Reach a value of 6300 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6300,
    rewardPoints: 3150,
    isSecret: true
  },
  {
    id: 'ach_631',
    title: 'Milestone 631',
    description: 'Reach a value of 6310 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6310,
    rewardPoints: 3155,
    isSecret: false
  },
  {
    id: 'ach_632',
    title: 'Milestone 632',
    description: 'Reach a value of 6320 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6320,
    rewardPoints: 3160,
    isSecret: false
  },
  {
    id: 'ach_633',
    title: 'Milestone 633',
    description: 'Reach a value of 6330 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6330,
    rewardPoints: 3165,
    isSecret: false
  },
  {
    id: 'ach_634',
    title: 'Milestone 634',
    description: 'Reach a value of 6340 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6340,
    rewardPoints: 3170,
    isSecret: false
  },
  {
    id: 'ach_635',
    title: 'Milestone 635',
    description: 'Reach a value of 6350 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6350,
    rewardPoints: 3175,
    isSecret: false
  },
  {
    id: 'ach_636',
    title: 'Milestone 636',
    description: 'Reach a value of 6360 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6360,
    rewardPoints: 3180,
    isSecret: false
  },
  {
    id: 'ach_637',
    title: 'Milestone 637',
    description: 'Reach a value of 6370 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6370,
    rewardPoints: 3185,
    isSecret: false
  },
  {
    id: 'ach_638',
    title: 'Milestone 638',
    description: 'Reach a value of 6380 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6380,
    rewardPoints: 3190,
    isSecret: false
  },
  {
    id: 'ach_639',
    title: 'Milestone 639',
    description: 'Reach a value of 6390 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6390,
    rewardPoints: 3195,
    isSecret: false
  },
  {
    id: 'ach_640',
    title: 'Milestone 640',
    description: 'Reach a value of 6400 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6400,
    rewardPoints: 3200,
    isSecret: true
  },
  {
    id: 'ach_641',
    title: 'Milestone 641',
    description: 'Reach a value of 6410 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6410,
    rewardPoints: 3205,
    isSecret: false
  },
  {
    id: 'ach_642',
    title: 'Milestone 642',
    description: 'Reach a value of 6420 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6420,
    rewardPoints: 3210,
    isSecret: false
  },
  {
    id: 'ach_643',
    title: 'Milestone 643',
    description: 'Reach a value of 6430 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6430,
    rewardPoints: 3215,
    isSecret: false
  },
  {
    id: 'ach_644',
    title: 'Milestone 644',
    description: 'Reach a value of 6440 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6440,
    rewardPoints: 3220,
    isSecret: false
  },
  {
    id: 'ach_645',
    title: 'Milestone 645',
    description: 'Reach a value of 6450 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6450,
    rewardPoints: 3225,
    isSecret: false
  },
  {
    id: 'ach_646',
    title: 'Milestone 646',
    description: 'Reach a value of 6460 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6460,
    rewardPoints: 3230,
    isSecret: false
  },
  {
    id: 'ach_647',
    title: 'Milestone 647',
    description: 'Reach a value of 6470 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6470,
    rewardPoints: 3235,
    isSecret: false
  },
  {
    id: 'ach_648',
    title: 'Milestone 648',
    description: 'Reach a value of 6480 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6480,
    rewardPoints: 3240,
    isSecret: false
  },
  {
    id: 'ach_649',
    title: 'Milestone 649',
    description: 'Reach a value of 6490 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6490,
    rewardPoints: 3245,
    isSecret: false
  },
  {
    id: 'ach_650',
    title: 'Milestone 650',
    description: 'Reach a value of 6500 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6500,
    rewardPoints: 3250,
    isSecret: true
  },
  {
    id: 'ach_651',
    title: 'Milestone 651',
    description: 'Reach a value of 6510 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6510,
    rewardPoints: 3255,
    isSecret: false
  },
  {
    id: 'ach_652',
    title: 'Milestone 652',
    description: 'Reach a value of 6520 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6520,
    rewardPoints: 3260,
    isSecret: false
  },
  {
    id: 'ach_653',
    title: 'Milestone 653',
    description: 'Reach a value of 6530 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6530,
    rewardPoints: 3265,
    isSecret: false
  },
  {
    id: 'ach_654',
    title: 'Milestone 654',
    description: 'Reach a value of 6540 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6540,
    rewardPoints: 3270,
    isSecret: false
  },
  {
    id: 'ach_655',
    title: 'Milestone 655',
    description: 'Reach a value of 6550 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6550,
    rewardPoints: 3275,
    isSecret: false
  },
  {
    id: 'ach_656',
    title: 'Milestone 656',
    description: 'Reach a value of 6560 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6560,
    rewardPoints: 3280,
    isSecret: false
  },
  {
    id: 'ach_657',
    title: 'Milestone 657',
    description: 'Reach a value of 6570 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6570,
    rewardPoints: 3285,
    isSecret: false
  },
  {
    id: 'ach_658',
    title: 'Milestone 658',
    description: 'Reach a value of 6580 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6580,
    rewardPoints: 3290,
    isSecret: false
  },
  {
    id: 'ach_659',
    title: 'Milestone 659',
    description: 'Reach a value of 6590 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6590,
    rewardPoints: 3295,
    isSecret: false
  },
  {
    id: 'ach_660',
    title: 'Milestone 660',
    description: 'Reach a value of 6600 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6600,
    rewardPoints: 3300,
    isSecret: true
  },
  {
    id: 'ach_661',
    title: 'Milestone 661',
    description: 'Reach a value of 6610 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6610,
    rewardPoints: 3305,
    isSecret: false
  },
  {
    id: 'ach_662',
    title: 'Milestone 662',
    description: 'Reach a value of 6620 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6620,
    rewardPoints: 3310,
    isSecret: false
  },
  {
    id: 'ach_663',
    title: 'Milestone 663',
    description: 'Reach a value of 6630 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6630,
    rewardPoints: 3315,
    isSecret: false
  },
  {
    id: 'ach_664',
    title: 'Milestone 664',
    description: 'Reach a value of 6640 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6640,
    rewardPoints: 3320,
    isSecret: false
  },
  {
    id: 'ach_665',
    title: 'Milestone 665',
    description: 'Reach a value of 6650 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6650,
    rewardPoints: 3325,
    isSecret: false
  },
  {
    id: 'ach_666',
    title: 'Milestone 666',
    description: 'Reach a value of 6660 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6660,
    rewardPoints: 3330,
    isSecret: false
  },
  {
    id: 'ach_667',
    title: 'Milestone 667',
    description: 'Reach a value of 6670 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6670,
    rewardPoints: 3335,
    isSecret: false
  },
  {
    id: 'ach_668',
    title: 'Milestone 668',
    description: 'Reach a value of 6680 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6680,
    rewardPoints: 3340,
    isSecret: false
  },
  {
    id: 'ach_669',
    title: 'Milestone 669',
    description: 'Reach a value of 6690 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6690,
    rewardPoints: 3345,
    isSecret: false
  },
  {
    id: 'ach_670',
    title: 'Milestone 670',
    description: 'Reach a value of 6700 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6700,
    rewardPoints: 3350,
    isSecret: true
  },
  {
    id: 'ach_671',
    title: 'Milestone 671',
    description: 'Reach a value of 6710 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6710,
    rewardPoints: 3355,
    isSecret: false
  },
  {
    id: 'ach_672',
    title: 'Milestone 672',
    description: 'Reach a value of 6720 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6720,
    rewardPoints: 3360,
    isSecret: false
  },
  {
    id: 'ach_673',
    title: 'Milestone 673',
    description: 'Reach a value of 6730 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6730,
    rewardPoints: 3365,
    isSecret: false
  },
  {
    id: 'ach_674',
    title: 'Milestone 674',
    description: 'Reach a value of 6740 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6740,
    rewardPoints: 3370,
    isSecret: false
  },
  {
    id: 'ach_675',
    title: 'Milestone 675',
    description: 'Reach a value of 6750 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6750,
    rewardPoints: 3375,
    isSecret: false
  },
  {
    id: 'ach_676',
    title: 'Milestone 676',
    description: 'Reach a value of 6760 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6760,
    rewardPoints: 3380,
    isSecret: false
  },
  {
    id: 'ach_677',
    title: 'Milestone 677',
    description: 'Reach a value of 6770 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6770,
    rewardPoints: 3385,
    isSecret: false
  },
  {
    id: 'ach_678',
    title: 'Milestone 678',
    description: 'Reach a value of 6780 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6780,
    rewardPoints: 3390,
    isSecret: false
  },
  {
    id: 'ach_679',
    title: 'Milestone 679',
    description: 'Reach a value of 6790 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6790,
    rewardPoints: 3395,
    isSecret: false
  },
  {
    id: 'ach_680',
    title: 'Milestone 680',
    description: 'Reach a value of 6800 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6800,
    rewardPoints: 3400,
    isSecret: true
  },
  {
    id: 'ach_681',
    title: 'Milestone 681',
    description: 'Reach a value of 6810 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6810,
    rewardPoints: 3405,
    isSecret: false
  },
  {
    id: 'ach_682',
    title: 'Milestone 682',
    description: 'Reach a value of 6820 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6820,
    rewardPoints: 3410,
    isSecret: false
  },
  {
    id: 'ach_683',
    title: 'Milestone 683',
    description: 'Reach a value of 6830 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6830,
    rewardPoints: 3415,
    isSecret: false
  },
  {
    id: 'ach_684',
    title: 'Milestone 684',
    description: 'Reach a value of 6840 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6840,
    rewardPoints: 3420,
    isSecret: false
  },
  {
    id: 'ach_685',
    title: 'Milestone 685',
    description: 'Reach a value of 6850 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6850,
    rewardPoints: 3425,
    isSecret: false
  },
  {
    id: 'ach_686',
    title: 'Milestone 686',
    description: 'Reach a value of 6860 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6860,
    rewardPoints: 3430,
    isSecret: false
  },
  {
    id: 'ach_687',
    title: 'Milestone 687',
    description: 'Reach a value of 6870 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6870,
    rewardPoints: 3435,
    isSecret: false
  },
  {
    id: 'ach_688',
    title: 'Milestone 688',
    description: 'Reach a value of 6880 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6880,
    rewardPoints: 3440,
    isSecret: false
  },
  {
    id: 'ach_689',
    title: 'Milestone 689',
    description: 'Reach a value of 6890 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6890,
    rewardPoints: 3445,
    isSecret: false
  },
  {
    id: 'ach_690',
    title: 'Milestone 690',
    description: 'Reach a value of 6900 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6900,
    rewardPoints: 3450,
    isSecret: true
  },
  {
    id: 'ach_691',
    title: 'Milestone 691',
    description: 'Reach a value of 6910 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6910,
    rewardPoints: 3455,
    isSecret: false
  },
  {
    id: 'ach_692',
    title: 'Milestone 692',
    description: 'Reach a value of 6920 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6920,
    rewardPoints: 3460,
    isSecret: false
  },
  {
    id: 'ach_693',
    title: 'Milestone 693',
    description: 'Reach a value of 6930 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6930,
    rewardPoints: 3465,
    isSecret: false
  },
  {
    id: 'ach_694',
    title: 'Milestone 694',
    description: 'Reach a value of 6940 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6940,
    rewardPoints: 3470,
    isSecret: false
  },
  {
    id: 'ach_695',
    title: 'Milestone 695',
    description: 'Reach a value of 6950 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6950,
    rewardPoints: 3475,
    isSecret: false
  },
  {
    id: 'ach_696',
    title: 'Milestone 696',
    description: 'Reach a value of 6960 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 6960,
    rewardPoints: 3480,
    isSecret: false
  },
  {
    id: 'ach_697',
    title: 'Milestone 697',
    description: 'Reach a value of 6970 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 6970,
    rewardPoints: 3485,
    isSecret: false
  },
  {
    id: 'ach_698',
    title: 'Milestone 698',
    description: 'Reach a value of 6980 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 6980,
    rewardPoints: 3490,
    isSecret: false
  },
  {
    id: 'ach_699',
    title: 'Milestone 699',
    description: 'Reach a value of 6990 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 6990,
    rewardPoints: 3495,
    isSecret: false
  },
  {
    id: 'ach_700',
    title: 'Milestone 700',
    description: 'Reach a value of 7000 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7000,
    rewardPoints: 3500,
    isSecret: true
  },
  {
    id: 'ach_701',
    title: 'Milestone 701',
    description: 'Reach a value of 7010 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7010,
    rewardPoints: 3505,
    isSecret: false
  },
  {
    id: 'ach_702',
    title: 'Milestone 702',
    description: 'Reach a value of 7020 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7020,
    rewardPoints: 3510,
    isSecret: false
  },
  {
    id: 'ach_703',
    title: 'Milestone 703',
    description: 'Reach a value of 7030 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7030,
    rewardPoints: 3515,
    isSecret: false
  },
  {
    id: 'ach_704',
    title: 'Milestone 704',
    description: 'Reach a value of 7040 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7040,
    rewardPoints: 3520,
    isSecret: false
  },
  {
    id: 'ach_705',
    title: 'Milestone 705',
    description: 'Reach a value of 7050 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7050,
    rewardPoints: 3525,
    isSecret: false
  },
  {
    id: 'ach_706',
    title: 'Milestone 706',
    description: 'Reach a value of 7060 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7060,
    rewardPoints: 3530,
    isSecret: false
  },
  {
    id: 'ach_707',
    title: 'Milestone 707',
    description: 'Reach a value of 7070 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7070,
    rewardPoints: 3535,
    isSecret: false
  },
  {
    id: 'ach_708',
    title: 'Milestone 708',
    description: 'Reach a value of 7080 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7080,
    rewardPoints: 3540,
    isSecret: false
  },
  {
    id: 'ach_709',
    title: 'Milestone 709',
    description: 'Reach a value of 7090 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7090,
    rewardPoints: 3545,
    isSecret: false
  },
  {
    id: 'ach_710',
    title: 'Milestone 710',
    description: 'Reach a value of 7100 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7100,
    rewardPoints: 3550,
    isSecret: true
  },
  {
    id: 'ach_711',
    title: 'Milestone 711',
    description: 'Reach a value of 7110 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7110,
    rewardPoints: 3555,
    isSecret: false
  },
  {
    id: 'ach_712',
    title: 'Milestone 712',
    description: 'Reach a value of 7120 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7120,
    rewardPoints: 3560,
    isSecret: false
  },
  {
    id: 'ach_713',
    title: 'Milestone 713',
    description: 'Reach a value of 7130 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7130,
    rewardPoints: 3565,
    isSecret: false
  },
  {
    id: 'ach_714',
    title: 'Milestone 714',
    description: 'Reach a value of 7140 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7140,
    rewardPoints: 3570,
    isSecret: false
  },
  {
    id: 'ach_715',
    title: 'Milestone 715',
    description: 'Reach a value of 7150 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7150,
    rewardPoints: 3575,
    isSecret: false
  },
  {
    id: 'ach_716',
    title: 'Milestone 716',
    description: 'Reach a value of 7160 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7160,
    rewardPoints: 3580,
    isSecret: false
  },
  {
    id: 'ach_717',
    title: 'Milestone 717',
    description: 'Reach a value of 7170 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7170,
    rewardPoints: 3585,
    isSecret: false
  },
  {
    id: 'ach_718',
    title: 'Milestone 718',
    description: 'Reach a value of 7180 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7180,
    rewardPoints: 3590,
    isSecret: false
  },
  {
    id: 'ach_719',
    title: 'Milestone 719',
    description: 'Reach a value of 7190 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7190,
    rewardPoints: 3595,
    isSecret: false
  },
  {
    id: 'ach_720',
    title: 'Milestone 720',
    description: 'Reach a value of 7200 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7200,
    rewardPoints: 3600,
    isSecret: true
  },
  {
    id: 'ach_721',
    title: 'Milestone 721',
    description: 'Reach a value of 7210 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7210,
    rewardPoints: 3605,
    isSecret: false
  },
  {
    id: 'ach_722',
    title: 'Milestone 722',
    description: 'Reach a value of 7220 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7220,
    rewardPoints: 3610,
    isSecret: false
  },
  {
    id: 'ach_723',
    title: 'Milestone 723',
    description: 'Reach a value of 7230 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7230,
    rewardPoints: 3615,
    isSecret: false
  },
  {
    id: 'ach_724',
    title: 'Milestone 724',
    description: 'Reach a value of 7240 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7240,
    rewardPoints: 3620,
    isSecret: false
  },
  {
    id: 'ach_725',
    title: 'Milestone 725',
    description: 'Reach a value of 7250 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7250,
    rewardPoints: 3625,
    isSecret: false
  },
  {
    id: 'ach_726',
    title: 'Milestone 726',
    description: 'Reach a value of 7260 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7260,
    rewardPoints: 3630,
    isSecret: false
  },
  {
    id: 'ach_727',
    title: 'Milestone 727',
    description: 'Reach a value of 7270 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7270,
    rewardPoints: 3635,
    isSecret: false
  },
  {
    id: 'ach_728',
    title: 'Milestone 728',
    description: 'Reach a value of 7280 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7280,
    rewardPoints: 3640,
    isSecret: false
  },
  {
    id: 'ach_729',
    title: 'Milestone 729',
    description: 'Reach a value of 7290 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7290,
    rewardPoints: 3645,
    isSecret: false
  },
  {
    id: 'ach_730',
    title: 'Milestone 730',
    description: 'Reach a value of 7300 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7300,
    rewardPoints: 3650,
    isSecret: true
  },
  {
    id: 'ach_731',
    title: 'Milestone 731',
    description: 'Reach a value of 7310 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7310,
    rewardPoints: 3655,
    isSecret: false
  },
  {
    id: 'ach_732',
    title: 'Milestone 732',
    description: 'Reach a value of 7320 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7320,
    rewardPoints: 3660,
    isSecret: false
  },
  {
    id: 'ach_733',
    title: 'Milestone 733',
    description: 'Reach a value of 7330 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7330,
    rewardPoints: 3665,
    isSecret: false
  },
  {
    id: 'ach_734',
    title: 'Milestone 734',
    description: 'Reach a value of 7340 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7340,
    rewardPoints: 3670,
    isSecret: false
  },
  {
    id: 'ach_735',
    title: 'Milestone 735',
    description: 'Reach a value of 7350 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7350,
    rewardPoints: 3675,
    isSecret: false
  },
  {
    id: 'ach_736',
    title: 'Milestone 736',
    description: 'Reach a value of 7360 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7360,
    rewardPoints: 3680,
    isSecret: false
  },
  {
    id: 'ach_737',
    title: 'Milestone 737',
    description: 'Reach a value of 7370 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7370,
    rewardPoints: 3685,
    isSecret: false
  },
  {
    id: 'ach_738',
    title: 'Milestone 738',
    description: 'Reach a value of 7380 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7380,
    rewardPoints: 3690,
    isSecret: false
  },
  {
    id: 'ach_739',
    title: 'Milestone 739',
    description: 'Reach a value of 7390 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7390,
    rewardPoints: 3695,
    isSecret: false
  },
  {
    id: 'ach_740',
    title: 'Milestone 740',
    description: 'Reach a value of 7400 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7400,
    rewardPoints: 3700,
    isSecret: true
  },
  {
    id: 'ach_741',
    title: 'Milestone 741',
    description: 'Reach a value of 7410 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7410,
    rewardPoints: 3705,
    isSecret: false
  },
  {
    id: 'ach_742',
    title: 'Milestone 742',
    description: 'Reach a value of 7420 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7420,
    rewardPoints: 3710,
    isSecret: false
  },
  {
    id: 'ach_743',
    title: 'Milestone 743',
    description: 'Reach a value of 7430 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7430,
    rewardPoints: 3715,
    isSecret: false
  },
  {
    id: 'ach_744',
    title: 'Milestone 744',
    description: 'Reach a value of 7440 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7440,
    rewardPoints: 3720,
    isSecret: false
  },
  {
    id: 'ach_745',
    title: 'Milestone 745',
    description: 'Reach a value of 7450 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7450,
    rewardPoints: 3725,
    isSecret: false
  },
  {
    id: 'ach_746',
    title: 'Milestone 746',
    description: 'Reach a value of 7460 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7460,
    rewardPoints: 3730,
    isSecret: false
  },
  {
    id: 'ach_747',
    title: 'Milestone 747',
    description: 'Reach a value of 7470 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7470,
    rewardPoints: 3735,
    isSecret: false
  },
  {
    id: 'ach_748',
    title: 'Milestone 748',
    description: 'Reach a value of 7480 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7480,
    rewardPoints: 3740,
    isSecret: false
  },
  {
    id: 'ach_749',
    title: 'Milestone 749',
    description: 'Reach a value of 7490 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7490,
    rewardPoints: 3745,
    isSecret: false
  },
  {
    id: 'ach_750',
    title: 'Milestone 750',
    description: 'Reach a value of 7500 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7500,
    rewardPoints: 3750,
    isSecret: true
  },
  {
    id: 'ach_751',
    title: 'Milestone 751',
    description: 'Reach a value of 7510 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7510,
    rewardPoints: 3755,
    isSecret: false
  },
  {
    id: 'ach_752',
    title: 'Milestone 752',
    description: 'Reach a value of 7520 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7520,
    rewardPoints: 3760,
    isSecret: false
  },
  {
    id: 'ach_753',
    title: 'Milestone 753',
    description: 'Reach a value of 7530 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7530,
    rewardPoints: 3765,
    isSecret: false
  },
  {
    id: 'ach_754',
    title: 'Milestone 754',
    description: 'Reach a value of 7540 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7540,
    rewardPoints: 3770,
    isSecret: false
  },
  {
    id: 'ach_755',
    title: 'Milestone 755',
    description: 'Reach a value of 7550 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7550,
    rewardPoints: 3775,
    isSecret: false
  },
  {
    id: 'ach_756',
    title: 'Milestone 756',
    description: 'Reach a value of 7560 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7560,
    rewardPoints: 3780,
    isSecret: false
  },
  {
    id: 'ach_757',
    title: 'Milestone 757',
    description: 'Reach a value of 7570 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7570,
    rewardPoints: 3785,
    isSecret: false
  },
  {
    id: 'ach_758',
    title: 'Milestone 758',
    description: 'Reach a value of 7580 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7580,
    rewardPoints: 3790,
    isSecret: false
  },
  {
    id: 'ach_759',
    title: 'Milestone 759',
    description: 'Reach a value of 7590 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7590,
    rewardPoints: 3795,
    isSecret: false
  },
  {
    id: 'ach_760',
    title: 'Milestone 760',
    description: 'Reach a value of 7600 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7600,
    rewardPoints: 3800,
    isSecret: true
  },
  {
    id: 'ach_761',
    title: 'Milestone 761',
    description: 'Reach a value of 7610 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7610,
    rewardPoints: 3805,
    isSecret: false
  },
  {
    id: 'ach_762',
    title: 'Milestone 762',
    description: 'Reach a value of 7620 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7620,
    rewardPoints: 3810,
    isSecret: false
  },
  {
    id: 'ach_763',
    title: 'Milestone 763',
    description: 'Reach a value of 7630 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7630,
    rewardPoints: 3815,
    isSecret: false
  },
  {
    id: 'ach_764',
    title: 'Milestone 764',
    description: 'Reach a value of 7640 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7640,
    rewardPoints: 3820,
    isSecret: false
  },
  {
    id: 'ach_765',
    title: 'Milestone 765',
    description: 'Reach a value of 7650 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7650,
    rewardPoints: 3825,
    isSecret: false
  },
  {
    id: 'ach_766',
    title: 'Milestone 766',
    description: 'Reach a value of 7660 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7660,
    rewardPoints: 3830,
    isSecret: false
  },
  {
    id: 'ach_767',
    title: 'Milestone 767',
    description: 'Reach a value of 7670 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7670,
    rewardPoints: 3835,
    isSecret: false
  },
  {
    id: 'ach_768',
    title: 'Milestone 768',
    description: 'Reach a value of 7680 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7680,
    rewardPoints: 3840,
    isSecret: false
  },
  {
    id: 'ach_769',
    title: 'Milestone 769',
    description: 'Reach a value of 7690 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7690,
    rewardPoints: 3845,
    isSecret: false
  },
  {
    id: 'ach_770',
    title: 'Milestone 770',
    description: 'Reach a value of 7700 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7700,
    rewardPoints: 3850,
    isSecret: true
  },
  {
    id: 'ach_771',
    title: 'Milestone 771',
    description: 'Reach a value of 7710 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7710,
    rewardPoints: 3855,
    isSecret: false
  },
  {
    id: 'ach_772',
    title: 'Milestone 772',
    description: 'Reach a value of 7720 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7720,
    rewardPoints: 3860,
    isSecret: false
  },
  {
    id: 'ach_773',
    title: 'Milestone 773',
    description: 'Reach a value of 7730 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7730,
    rewardPoints: 3865,
    isSecret: false
  },
  {
    id: 'ach_774',
    title: 'Milestone 774',
    description: 'Reach a value of 7740 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7740,
    rewardPoints: 3870,
    isSecret: false
  },
  {
    id: 'ach_775',
    title: 'Milestone 775',
    description: 'Reach a value of 7750 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7750,
    rewardPoints: 3875,
    isSecret: false
  },
  {
    id: 'ach_776',
    title: 'Milestone 776',
    description: 'Reach a value of 7760 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7760,
    rewardPoints: 3880,
    isSecret: false
  },
  {
    id: 'ach_777',
    title: 'Milestone 777',
    description: 'Reach a value of 7770 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7770,
    rewardPoints: 3885,
    isSecret: false
  },
  {
    id: 'ach_778',
    title: 'Milestone 778',
    description: 'Reach a value of 7780 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7780,
    rewardPoints: 3890,
    isSecret: false
  },
  {
    id: 'ach_779',
    title: 'Milestone 779',
    description: 'Reach a value of 7790 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7790,
    rewardPoints: 3895,
    isSecret: false
  },
  {
    id: 'ach_780',
    title: 'Milestone 780',
    description: 'Reach a value of 7800 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7800,
    rewardPoints: 3900,
    isSecret: true
  },
  {
    id: 'ach_781',
    title: 'Milestone 781',
    description: 'Reach a value of 7810 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7810,
    rewardPoints: 3905,
    isSecret: false
  },
  {
    id: 'ach_782',
    title: 'Milestone 782',
    description: 'Reach a value of 7820 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7820,
    rewardPoints: 3910,
    isSecret: false
  },
  {
    id: 'ach_783',
    title: 'Milestone 783',
    description: 'Reach a value of 7830 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7830,
    rewardPoints: 3915,
    isSecret: false
  },
  {
    id: 'ach_784',
    title: 'Milestone 784',
    description: 'Reach a value of 7840 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7840,
    rewardPoints: 3920,
    isSecret: false
  },
  {
    id: 'ach_785',
    title: 'Milestone 785',
    description: 'Reach a value of 7850 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7850,
    rewardPoints: 3925,
    isSecret: false
  },
  {
    id: 'ach_786',
    title: 'Milestone 786',
    description: 'Reach a value of 7860 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7860,
    rewardPoints: 3930,
    isSecret: false
  },
  {
    id: 'ach_787',
    title: 'Milestone 787',
    description: 'Reach a value of 7870 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7870,
    rewardPoints: 3935,
    isSecret: false
  },
  {
    id: 'ach_788',
    title: 'Milestone 788',
    description: 'Reach a value of 7880 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7880,
    rewardPoints: 3940,
    isSecret: false
  },
  {
    id: 'ach_789',
    title: 'Milestone 789',
    description: 'Reach a value of 7890 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7890,
    rewardPoints: 3945,
    isSecret: false
  },
  {
    id: 'ach_790',
    title: 'Milestone 790',
    description: 'Reach a value of 7900 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7900,
    rewardPoints: 3950,
    isSecret: true
  },
  {
    id: 'ach_791',
    title: 'Milestone 791',
    description: 'Reach a value of 7910 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7910,
    rewardPoints: 3955,
    isSecret: false
  },
  {
    id: 'ach_792',
    title: 'Milestone 792',
    description: 'Reach a value of 7920 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7920,
    rewardPoints: 3960,
    isSecret: false
  },
  {
    id: 'ach_793',
    title: 'Milestone 793',
    description: 'Reach a value of 7930 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7930,
    rewardPoints: 3965,
    isSecret: false
  },
  {
    id: 'ach_794',
    title: 'Milestone 794',
    description: 'Reach a value of 7940 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7940,
    rewardPoints: 3970,
    isSecret: false
  },
  {
    id: 'ach_795',
    title: 'Milestone 795',
    description: 'Reach a value of 7950 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7950,
    rewardPoints: 3975,
    isSecret: false
  },
  {
    id: 'ach_796',
    title: 'Milestone 796',
    description: 'Reach a value of 7960 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 7960,
    rewardPoints: 3980,
    isSecret: false
  },
  {
    id: 'ach_797',
    title: 'Milestone 797',
    description: 'Reach a value of 7970 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 7970,
    rewardPoints: 3985,
    isSecret: false
  },
  {
    id: 'ach_798',
    title: 'Milestone 798',
    description: 'Reach a value of 7980 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 7980,
    rewardPoints: 3990,
    isSecret: false
  },
  {
    id: 'ach_799',
    title: 'Milestone 799',
    description: 'Reach a value of 7990 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 7990,
    rewardPoints: 3995,
    isSecret: false
  },
  {
    id: 'ach_800',
    title: 'Milestone 800',
    description: 'Reach a value of 8000 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8000,
    rewardPoints: 4000,
    isSecret: true
  },
  {
    id: 'ach_801',
    title: 'Milestone 801',
    description: 'Reach a value of 8010 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8010,
    rewardPoints: 4005,
    isSecret: false
  },
  {
    id: 'ach_802',
    title: 'Milestone 802',
    description: 'Reach a value of 8020 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8020,
    rewardPoints: 4010,
    isSecret: false
  },
  {
    id: 'ach_803',
    title: 'Milestone 803',
    description: 'Reach a value of 8030 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8030,
    rewardPoints: 4015,
    isSecret: false
  },
  {
    id: 'ach_804',
    title: 'Milestone 804',
    description: 'Reach a value of 8040 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8040,
    rewardPoints: 4020,
    isSecret: false
  },
  {
    id: 'ach_805',
    title: 'Milestone 805',
    description: 'Reach a value of 8050 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8050,
    rewardPoints: 4025,
    isSecret: false
  },
  {
    id: 'ach_806',
    title: 'Milestone 806',
    description: 'Reach a value of 8060 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8060,
    rewardPoints: 4030,
    isSecret: false
  },
  {
    id: 'ach_807',
    title: 'Milestone 807',
    description: 'Reach a value of 8070 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8070,
    rewardPoints: 4035,
    isSecret: false
  },
  {
    id: 'ach_808',
    title: 'Milestone 808',
    description: 'Reach a value of 8080 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8080,
    rewardPoints: 4040,
    isSecret: false
  },
  {
    id: 'ach_809',
    title: 'Milestone 809',
    description: 'Reach a value of 8090 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8090,
    rewardPoints: 4045,
    isSecret: false
  },
  {
    id: 'ach_810',
    title: 'Milestone 810',
    description: 'Reach a value of 8100 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8100,
    rewardPoints: 4050,
    isSecret: true
  },
  {
    id: 'ach_811',
    title: 'Milestone 811',
    description: 'Reach a value of 8110 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8110,
    rewardPoints: 4055,
    isSecret: false
  },
  {
    id: 'ach_812',
    title: 'Milestone 812',
    description: 'Reach a value of 8120 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8120,
    rewardPoints: 4060,
    isSecret: false
  },
  {
    id: 'ach_813',
    title: 'Milestone 813',
    description: 'Reach a value of 8130 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8130,
    rewardPoints: 4065,
    isSecret: false
  },
  {
    id: 'ach_814',
    title: 'Milestone 814',
    description: 'Reach a value of 8140 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8140,
    rewardPoints: 4070,
    isSecret: false
  },
  {
    id: 'ach_815',
    title: 'Milestone 815',
    description: 'Reach a value of 8150 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8150,
    rewardPoints: 4075,
    isSecret: false
  },
  {
    id: 'ach_816',
    title: 'Milestone 816',
    description: 'Reach a value of 8160 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8160,
    rewardPoints: 4080,
    isSecret: false
  },
  {
    id: 'ach_817',
    title: 'Milestone 817',
    description: 'Reach a value of 8170 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8170,
    rewardPoints: 4085,
    isSecret: false
  },
  {
    id: 'ach_818',
    title: 'Milestone 818',
    description: 'Reach a value of 8180 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8180,
    rewardPoints: 4090,
    isSecret: false
  },
  {
    id: 'ach_819',
    title: 'Milestone 819',
    description: 'Reach a value of 8190 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8190,
    rewardPoints: 4095,
    isSecret: false
  },
  {
    id: 'ach_820',
    title: 'Milestone 820',
    description: 'Reach a value of 8200 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8200,
    rewardPoints: 4100,
    isSecret: true
  },
  {
    id: 'ach_821',
    title: 'Milestone 821',
    description: 'Reach a value of 8210 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8210,
    rewardPoints: 4105,
    isSecret: false
  },
  {
    id: 'ach_822',
    title: 'Milestone 822',
    description: 'Reach a value of 8220 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8220,
    rewardPoints: 4110,
    isSecret: false
  },
  {
    id: 'ach_823',
    title: 'Milestone 823',
    description: 'Reach a value of 8230 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8230,
    rewardPoints: 4115,
    isSecret: false
  },
  {
    id: 'ach_824',
    title: 'Milestone 824',
    description: 'Reach a value of 8240 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8240,
    rewardPoints: 4120,
    isSecret: false
  },
  {
    id: 'ach_825',
    title: 'Milestone 825',
    description: 'Reach a value of 8250 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8250,
    rewardPoints: 4125,
    isSecret: false
  },
  {
    id: 'ach_826',
    title: 'Milestone 826',
    description: 'Reach a value of 8260 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8260,
    rewardPoints: 4130,
    isSecret: false
  },
  {
    id: 'ach_827',
    title: 'Milestone 827',
    description: 'Reach a value of 8270 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8270,
    rewardPoints: 4135,
    isSecret: false
  },
  {
    id: 'ach_828',
    title: 'Milestone 828',
    description: 'Reach a value of 8280 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8280,
    rewardPoints: 4140,
    isSecret: false
  },
  {
    id: 'ach_829',
    title: 'Milestone 829',
    description: 'Reach a value of 8290 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8290,
    rewardPoints: 4145,
    isSecret: false
  },
  {
    id: 'ach_830',
    title: 'Milestone 830',
    description: 'Reach a value of 8300 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8300,
    rewardPoints: 4150,
    isSecret: true
  },
  {
    id: 'ach_831',
    title: 'Milestone 831',
    description: 'Reach a value of 8310 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8310,
    rewardPoints: 4155,
    isSecret: false
  },
  {
    id: 'ach_832',
    title: 'Milestone 832',
    description: 'Reach a value of 8320 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8320,
    rewardPoints: 4160,
    isSecret: false
  },
  {
    id: 'ach_833',
    title: 'Milestone 833',
    description: 'Reach a value of 8330 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8330,
    rewardPoints: 4165,
    isSecret: false
  },
  {
    id: 'ach_834',
    title: 'Milestone 834',
    description: 'Reach a value of 8340 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8340,
    rewardPoints: 4170,
    isSecret: false
  },
  {
    id: 'ach_835',
    title: 'Milestone 835',
    description: 'Reach a value of 8350 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8350,
    rewardPoints: 4175,
    isSecret: false
  },
  {
    id: 'ach_836',
    title: 'Milestone 836',
    description: 'Reach a value of 8360 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8360,
    rewardPoints: 4180,
    isSecret: false
  },
  {
    id: 'ach_837',
    title: 'Milestone 837',
    description: 'Reach a value of 8370 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8370,
    rewardPoints: 4185,
    isSecret: false
  },
  {
    id: 'ach_838',
    title: 'Milestone 838',
    description: 'Reach a value of 8380 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8380,
    rewardPoints: 4190,
    isSecret: false
  },
  {
    id: 'ach_839',
    title: 'Milestone 839',
    description: 'Reach a value of 8390 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8390,
    rewardPoints: 4195,
    isSecret: false
  },
  {
    id: 'ach_840',
    title: 'Milestone 840',
    description: 'Reach a value of 8400 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8400,
    rewardPoints: 4200,
    isSecret: true
  },
  {
    id: 'ach_841',
    title: 'Milestone 841',
    description: 'Reach a value of 8410 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8410,
    rewardPoints: 4205,
    isSecret: false
  },
  {
    id: 'ach_842',
    title: 'Milestone 842',
    description: 'Reach a value of 8420 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8420,
    rewardPoints: 4210,
    isSecret: false
  },
  {
    id: 'ach_843',
    title: 'Milestone 843',
    description: 'Reach a value of 8430 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8430,
    rewardPoints: 4215,
    isSecret: false
  },
  {
    id: 'ach_844',
    title: 'Milestone 844',
    description: 'Reach a value of 8440 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8440,
    rewardPoints: 4220,
    isSecret: false
  },
  {
    id: 'ach_845',
    title: 'Milestone 845',
    description: 'Reach a value of 8450 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8450,
    rewardPoints: 4225,
    isSecret: false
  },
  {
    id: 'ach_846',
    title: 'Milestone 846',
    description: 'Reach a value of 8460 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8460,
    rewardPoints: 4230,
    isSecret: false
  },
  {
    id: 'ach_847',
    title: 'Milestone 847',
    description: 'Reach a value of 8470 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8470,
    rewardPoints: 4235,
    isSecret: false
  },
  {
    id: 'ach_848',
    title: 'Milestone 848',
    description: 'Reach a value of 8480 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8480,
    rewardPoints: 4240,
    isSecret: false
  },
  {
    id: 'ach_849',
    title: 'Milestone 849',
    description: 'Reach a value of 8490 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8490,
    rewardPoints: 4245,
    isSecret: false
  },
  {
    id: 'ach_850',
    title: 'Milestone 850',
    description: 'Reach a value of 8500 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8500,
    rewardPoints: 4250,
    isSecret: true
  },
  {
    id: 'ach_851',
    title: 'Milestone 851',
    description: 'Reach a value of 8510 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8510,
    rewardPoints: 4255,
    isSecret: false
  },
  {
    id: 'ach_852',
    title: 'Milestone 852',
    description: 'Reach a value of 8520 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8520,
    rewardPoints: 4260,
    isSecret: false
  },
  {
    id: 'ach_853',
    title: 'Milestone 853',
    description: 'Reach a value of 8530 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8530,
    rewardPoints: 4265,
    isSecret: false
  },
  {
    id: 'ach_854',
    title: 'Milestone 854',
    description: 'Reach a value of 8540 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8540,
    rewardPoints: 4270,
    isSecret: false
  },
  {
    id: 'ach_855',
    title: 'Milestone 855',
    description: 'Reach a value of 8550 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8550,
    rewardPoints: 4275,
    isSecret: false
  },
  {
    id: 'ach_856',
    title: 'Milestone 856',
    description: 'Reach a value of 8560 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8560,
    rewardPoints: 4280,
    isSecret: false
  },
  {
    id: 'ach_857',
    title: 'Milestone 857',
    description: 'Reach a value of 8570 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8570,
    rewardPoints: 4285,
    isSecret: false
  },
  {
    id: 'ach_858',
    title: 'Milestone 858',
    description: 'Reach a value of 8580 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8580,
    rewardPoints: 4290,
    isSecret: false
  },
  {
    id: 'ach_859',
    title: 'Milestone 859',
    description: 'Reach a value of 8590 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8590,
    rewardPoints: 4295,
    isSecret: false
  },
  {
    id: 'ach_860',
    title: 'Milestone 860',
    description: 'Reach a value of 8600 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8600,
    rewardPoints: 4300,
    isSecret: true
  },
  {
    id: 'ach_861',
    title: 'Milestone 861',
    description: 'Reach a value of 8610 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8610,
    rewardPoints: 4305,
    isSecret: false
  },
  {
    id: 'ach_862',
    title: 'Milestone 862',
    description: 'Reach a value of 8620 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8620,
    rewardPoints: 4310,
    isSecret: false
  },
  {
    id: 'ach_863',
    title: 'Milestone 863',
    description: 'Reach a value of 8630 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8630,
    rewardPoints: 4315,
    isSecret: false
  },
  {
    id: 'ach_864',
    title: 'Milestone 864',
    description: 'Reach a value of 8640 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8640,
    rewardPoints: 4320,
    isSecret: false
  },
  {
    id: 'ach_865',
    title: 'Milestone 865',
    description: 'Reach a value of 8650 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8650,
    rewardPoints: 4325,
    isSecret: false
  },
  {
    id: 'ach_866',
    title: 'Milestone 866',
    description: 'Reach a value of 8660 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8660,
    rewardPoints: 4330,
    isSecret: false
  },
  {
    id: 'ach_867',
    title: 'Milestone 867',
    description: 'Reach a value of 8670 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8670,
    rewardPoints: 4335,
    isSecret: false
  },
  {
    id: 'ach_868',
    title: 'Milestone 868',
    description: 'Reach a value of 8680 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8680,
    rewardPoints: 4340,
    isSecret: false
  },
  {
    id: 'ach_869',
    title: 'Milestone 869',
    description: 'Reach a value of 8690 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8690,
    rewardPoints: 4345,
    isSecret: false
  },
  {
    id: 'ach_870',
    title: 'Milestone 870',
    description: 'Reach a value of 8700 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8700,
    rewardPoints: 4350,
    isSecret: true
  },
  {
    id: 'ach_871',
    title: 'Milestone 871',
    description: 'Reach a value of 8710 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8710,
    rewardPoints: 4355,
    isSecret: false
  },
  {
    id: 'ach_872',
    title: 'Milestone 872',
    description: 'Reach a value of 8720 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8720,
    rewardPoints: 4360,
    isSecret: false
  },
  {
    id: 'ach_873',
    title: 'Milestone 873',
    description: 'Reach a value of 8730 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8730,
    rewardPoints: 4365,
    isSecret: false
  },
  {
    id: 'ach_874',
    title: 'Milestone 874',
    description: 'Reach a value of 8740 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8740,
    rewardPoints: 4370,
    isSecret: false
  },
  {
    id: 'ach_875',
    title: 'Milestone 875',
    description: 'Reach a value of 8750 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8750,
    rewardPoints: 4375,
    isSecret: false
  },
  {
    id: 'ach_876',
    title: 'Milestone 876',
    description: 'Reach a value of 8760 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8760,
    rewardPoints: 4380,
    isSecret: false
  },
  {
    id: 'ach_877',
    title: 'Milestone 877',
    description: 'Reach a value of 8770 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8770,
    rewardPoints: 4385,
    isSecret: false
  },
  {
    id: 'ach_878',
    title: 'Milestone 878',
    description: 'Reach a value of 8780 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8780,
    rewardPoints: 4390,
    isSecret: false
  },
  {
    id: 'ach_879',
    title: 'Milestone 879',
    description: 'Reach a value of 8790 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8790,
    rewardPoints: 4395,
    isSecret: false
  },
  {
    id: 'ach_880',
    title: 'Milestone 880',
    description: 'Reach a value of 8800 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8800,
    rewardPoints: 4400,
    isSecret: true
  },
  {
    id: 'ach_881',
    title: 'Milestone 881',
    description: 'Reach a value of 8810 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8810,
    rewardPoints: 4405,
    isSecret: false
  },
  {
    id: 'ach_882',
    title: 'Milestone 882',
    description: 'Reach a value of 8820 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8820,
    rewardPoints: 4410,
    isSecret: false
  },
  {
    id: 'ach_883',
    title: 'Milestone 883',
    description: 'Reach a value of 8830 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8830,
    rewardPoints: 4415,
    isSecret: false
  },
  {
    id: 'ach_884',
    title: 'Milestone 884',
    description: 'Reach a value of 8840 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8840,
    rewardPoints: 4420,
    isSecret: false
  },
  {
    id: 'ach_885',
    title: 'Milestone 885',
    description: 'Reach a value of 8850 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8850,
    rewardPoints: 4425,
    isSecret: false
  },
  {
    id: 'ach_886',
    title: 'Milestone 886',
    description: 'Reach a value of 8860 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8860,
    rewardPoints: 4430,
    isSecret: false
  },
  {
    id: 'ach_887',
    title: 'Milestone 887',
    description: 'Reach a value of 8870 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8870,
    rewardPoints: 4435,
    isSecret: false
  },
  {
    id: 'ach_888',
    title: 'Milestone 888',
    description: 'Reach a value of 8880 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8880,
    rewardPoints: 4440,
    isSecret: false
  },
  {
    id: 'ach_889',
    title: 'Milestone 889',
    description: 'Reach a value of 8890 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8890,
    rewardPoints: 4445,
    isSecret: false
  },
  {
    id: 'ach_890',
    title: 'Milestone 890',
    description: 'Reach a value of 8900 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8900,
    rewardPoints: 4450,
    isSecret: true
  },
  {
    id: 'ach_891',
    title: 'Milestone 891',
    description: 'Reach a value of 8910 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8910,
    rewardPoints: 4455,
    isSecret: false
  },
  {
    id: 'ach_892',
    title: 'Milestone 892',
    description: 'Reach a value of 8920 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8920,
    rewardPoints: 4460,
    isSecret: false
  },
  {
    id: 'ach_893',
    title: 'Milestone 893',
    description: 'Reach a value of 8930 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8930,
    rewardPoints: 4465,
    isSecret: false
  },
  {
    id: 'ach_894',
    title: 'Milestone 894',
    description: 'Reach a value of 8940 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8940,
    rewardPoints: 4470,
    isSecret: false
  },
  {
    id: 'ach_895',
    title: 'Milestone 895',
    description: 'Reach a value of 8950 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8950,
    rewardPoints: 4475,
    isSecret: false
  },
  {
    id: 'ach_896',
    title: 'Milestone 896',
    description: 'Reach a value of 8960 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 8960,
    rewardPoints: 4480,
    isSecret: false
  },
  {
    id: 'ach_897',
    title: 'Milestone 897',
    description: 'Reach a value of 8970 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 8970,
    rewardPoints: 4485,
    isSecret: false
  },
  {
    id: 'ach_898',
    title: 'Milestone 898',
    description: 'Reach a value of 8980 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 8980,
    rewardPoints: 4490,
    isSecret: false
  },
  {
    id: 'ach_899',
    title: 'Milestone 899',
    description: 'Reach a value of 8990 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 8990,
    rewardPoints: 4495,
    isSecret: false
  },
  {
    id: 'ach_900',
    title: 'Milestone 900',
    description: 'Reach a value of 9000 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9000,
    rewardPoints: 4500,
    isSecret: true
  },
  {
    id: 'ach_901',
    title: 'Milestone 901',
    description: 'Reach a value of 9010 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9010,
    rewardPoints: 4505,
    isSecret: false
  },
  {
    id: 'ach_902',
    title: 'Milestone 902',
    description: 'Reach a value of 9020 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9020,
    rewardPoints: 4510,
    isSecret: false
  },
  {
    id: 'ach_903',
    title: 'Milestone 903',
    description: 'Reach a value of 9030 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9030,
    rewardPoints: 4515,
    isSecret: false
  },
  {
    id: 'ach_904',
    title: 'Milestone 904',
    description: 'Reach a value of 9040 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9040,
    rewardPoints: 4520,
    isSecret: false
  },
  {
    id: 'ach_905',
    title: 'Milestone 905',
    description: 'Reach a value of 9050 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9050,
    rewardPoints: 4525,
    isSecret: false
  },
  {
    id: 'ach_906',
    title: 'Milestone 906',
    description: 'Reach a value of 9060 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9060,
    rewardPoints: 4530,
    isSecret: false
  },
  {
    id: 'ach_907',
    title: 'Milestone 907',
    description: 'Reach a value of 9070 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9070,
    rewardPoints: 4535,
    isSecret: false
  },
  {
    id: 'ach_908',
    title: 'Milestone 908',
    description: 'Reach a value of 9080 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9080,
    rewardPoints: 4540,
    isSecret: false
  },
  {
    id: 'ach_909',
    title: 'Milestone 909',
    description: 'Reach a value of 9090 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9090,
    rewardPoints: 4545,
    isSecret: false
  },
  {
    id: 'ach_910',
    title: 'Milestone 910',
    description: 'Reach a value of 9100 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9100,
    rewardPoints: 4550,
    isSecret: true
  },
  {
    id: 'ach_911',
    title: 'Milestone 911',
    description: 'Reach a value of 9110 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9110,
    rewardPoints: 4555,
    isSecret: false
  },
  {
    id: 'ach_912',
    title: 'Milestone 912',
    description: 'Reach a value of 9120 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9120,
    rewardPoints: 4560,
    isSecret: false
  },
  {
    id: 'ach_913',
    title: 'Milestone 913',
    description: 'Reach a value of 9130 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9130,
    rewardPoints: 4565,
    isSecret: false
  },
  {
    id: 'ach_914',
    title: 'Milestone 914',
    description: 'Reach a value of 9140 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9140,
    rewardPoints: 4570,
    isSecret: false
  },
  {
    id: 'ach_915',
    title: 'Milestone 915',
    description: 'Reach a value of 9150 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9150,
    rewardPoints: 4575,
    isSecret: false
  },
  {
    id: 'ach_916',
    title: 'Milestone 916',
    description: 'Reach a value of 9160 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9160,
    rewardPoints: 4580,
    isSecret: false
  },
  {
    id: 'ach_917',
    title: 'Milestone 917',
    description: 'Reach a value of 9170 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9170,
    rewardPoints: 4585,
    isSecret: false
  },
  {
    id: 'ach_918',
    title: 'Milestone 918',
    description: 'Reach a value of 9180 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9180,
    rewardPoints: 4590,
    isSecret: false
  },
  {
    id: 'ach_919',
    title: 'Milestone 919',
    description: 'Reach a value of 9190 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9190,
    rewardPoints: 4595,
    isSecret: false
  },
  {
    id: 'ach_920',
    title: 'Milestone 920',
    description: 'Reach a value of 9200 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9200,
    rewardPoints: 4600,
    isSecret: true
  },
  {
    id: 'ach_921',
    title: 'Milestone 921',
    description: 'Reach a value of 9210 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9210,
    rewardPoints: 4605,
    isSecret: false
  },
  {
    id: 'ach_922',
    title: 'Milestone 922',
    description: 'Reach a value of 9220 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9220,
    rewardPoints: 4610,
    isSecret: false
  },
  {
    id: 'ach_923',
    title: 'Milestone 923',
    description: 'Reach a value of 9230 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9230,
    rewardPoints: 4615,
    isSecret: false
  },
  {
    id: 'ach_924',
    title: 'Milestone 924',
    description: 'Reach a value of 9240 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9240,
    rewardPoints: 4620,
    isSecret: false
  },
  {
    id: 'ach_925',
    title: 'Milestone 925',
    description: 'Reach a value of 9250 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9250,
    rewardPoints: 4625,
    isSecret: false
  },
  {
    id: 'ach_926',
    title: 'Milestone 926',
    description: 'Reach a value of 9260 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9260,
    rewardPoints: 4630,
    isSecret: false
  },
  {
    id: 'ach_927',
    title: 'Milestone 927',
    description: 'Reach a value of 9270 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9270,
    rewardPoints: 4635,
    isSecret: false
  },
  {
    id: 'ach_928',
    title: 'Milestone 928',
    description: 'Reach a value of 9280 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9280,
    rewardPoints: 4640,
    isSecret: false
  },
  {
    id: 'ach_929',
    title: 'Milestone 929',
    description: 'Reach a value of 9290 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9290,
    rewardPoints: 4645,
    isSecret: false
  },
  {
    id: 'ach_930',
    title: 'Milestone 930',
    description: 'Reach a value of 9300 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9300,
    rewardPoints: 4650,
    isSecret: true
  },
  {
    id: 'ach_931',
    title: 'Milestone 931',
    description: 'Reach a value of 9310 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9310,
    rewardPoints: 4655,
    isSecret: false
  },
  {
    id: 'ach_932',
    title: 'Milestone 932',
    description: 'Reach a value of 9320 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9320,
    rewardPoints: 4660,
    isSecret: false
  },
  {
    id: 'ach_933',
    title: 'Milestone 933',
    description: 'Reach a value of 9330 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9330,
    rewardPoints: 4665,
    isSecret: false
  },
  {
    id: 'ach_934',
    title: 'Milestone 934',
    description: 'Reach a value of 9340 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9340,
    rewardPoints: 4670,
    isSecret: false
  },
  {
    id: 'ach_935',
    title: 'Milestone 935',
    description: 'Reach a value of 9350 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9350,
    rewardPoints: 4675,
    isSecret: false
  },
  {
    id: 'ach_936',
    title: 'Milestone 936',
    description: 'Reach a value of 9360 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9360,
    rewardPoints: 4680,
    isSecret: false
  },
  {
    id: 'ach_937',
    title: 'Milestone 937',
    description: 'Reach a value of 9370 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9370,
    rewardPoints: 4685,
    isSecret: false
  },
  {
    id: 'ach_938',
    title: 'Milestone 938',
    description: 'Reach a value of 9380 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9380,
    rewardPoints: 4690,
    isSecret: false
  },
  {
    id: 'ach_939',
    title: 'Milestone 939',
    description: 'Reach a value of 9390 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9390,
    rewardPoints: 4695,
    isSecret: false
  },
  {
    id: 'ach_940',
    title: 'Milestone 940',
    description: 'Reach a value of 9400 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9400,
    rewardPoints: 4700,
    isSecret: true
  },
  {
    id: 'ach_941',
    title: 'Milestone 941',
    description: 'Reach a value of 9410 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9410,
    rewardPoints: 4705,
    isSecret: false
  },
  {
    id: 'ach_942',
    title: 'Milestone 942',
    description: 'Reach a value of 9420 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9420,
    rewardPoints: 4710,
    isSecret: false
  },
  {
    id: 'ach_943',
    title: 'Milestone 943',
    description: 'Reach a value of 9430 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9430,
    rewardPoints: 4715,
    isSecret: false
  },
  {
    id: 'ach_944',
    title: 'Milestone 944',
    description: 'Reach a value of 9440 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9440,
    rewardPoints: 4720,
    isSecret: false
  },
  {
    id: 'ach_945',
    title: 'Milestone 945',
    description: 'Reach a value of 9450 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9450,
    rewardPoints: 4725,
    isSecret: false
  },
  {
    id: 'ach_946',
    title: 'Milestone 946',
    description: 'Reach a value of 9460 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9460,
    rewardPoints: 4730,
    isSecret: false
  },
  {
    id: 'ach_947',
    title: 'Milestone 947',
    description: 'Reach a value of 9470 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9470,
    rewardPoints: 4735,
    isSecret: false
  },
  {
    id: 'ach_948',
    title: 'Milestone 948',
    description: 'Reach a value of 9480 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9480,
    rewardPoints: 4740,
    isSecret: false
  },
  {
    id: 'ach_949',
    title: 'Milestone 949',
    description: 'Reach a value of 9490 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9490,
    rewardPoints: 4745,
    isSecret: false
  },
  {
    id: 'ach_950',
    title: 'Milestone 950',
    description: 'Reach a value of 9500 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9500,
    rewardPoints: 4750,
    isSecret: true
  },
  {
    id: 'ach_951',
    title: 'Milestone 951',
    description: 'Reach a value of 9510 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9510,
    rewardPoints: 4755,
    isSecret: false
  },
  {
    id: 'ach_952',
    title: 'Milestone 952',
    description: 'Reach a value of 9520 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9520,
    rewardPoints: 4760,
    isSecret: false
  },
  {
    id: 'ach_953',
    title: 'Milestone 953',
    description: 'Reach a value of 9530 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9530,
    rewardPoints: 4765,
    isSecret: false
  },
  {
    id: 'ach_954',
    title: 'Milestone 954',
    description: 'Reach a value of 9540 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9540,
    rewardPoints: 4770,
    isSecret: false
  },
  {
    id: 'ach_955',
    title: 'Milestone 955',
    description: 'Reach a value of 9550 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9550,
    rewardPoints: 4775,
    isSecret: false
  },
  {
    id: 'ach_956',
    title: 'Milestone 956',
    description: 'Reach a value of 9560 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9560,
    rewardPoints: 4780,
    isSecret: false
  },
  {
    id: 'ach_957',
    title: 'Milestone 957',
    description: 'Reach a value of 9570 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9570,
    rewardPoints: 4785,
    isSecret: false
  },
  {
    id: 'ach_958',
    title: 'Milestone 958',
    description: 'Reach a value of 9580 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9580,
    rewardPoints: 4790,
    isSecret: false
  },
  {
    id: 'ach_959',
    title: 'Milestone 959',
    description: 'Reach a value of 9590 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9590,
    rewardPoints: 4795,
    isSecret: false
  },
  {
    id: 'ach_960',
    title: 'Milestone 960',
    description: 'Reach a value of 9600 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9600,
    rewardPoints: 4800,
    isSecret: true
  },
  {
    id: 'ach_961',
    title: 'Milestone 961',
    description: 'Reach a value of 9610 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9610,
    rewardPoints: 4805,
    isSecret: false
  },
  {
    id: 'ach_962',
    title: 'Milestone 962',
    description: 'Reach a value of 9620 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9620,
    rewardPoints: 4810,
    isSecret: false
  },
  {
    id: 'ach_963',
    title: 'Milestone 963',
    description: 'Reach a value of 9630 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9630,
    rewardPoints: 4815,
    isSecret: false
  },
  {
    id: 'ach_964',
    title: 'Milestone 964',
    description: 'Reach a value of 9640 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9640,
    rewardPoints: 4820,
    isSecret: false
  },
  {
    id: 'ach_965',
    title: 'Milestone 965',
    description: 'Reach a value of 9650 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9650,
    rewardPoints: 4825,
    isSecret: false
  },
  {
    id: 'ach_966',
    title: 'Milestone 966',
    description: 'Reach a value of 9660 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9660,
    rewardPoints: 4830,
    isSecret: false
  },
  {
    id: 'ach_967',
    title: 'Milestone 967',
    description: 'Reach a value of 9670 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9670,
    rewardPoints: 4835,
    isSecret: false
  },
  {
    id: 'ach_968',
    title: 'Milestone 968',
    description: 'Reach a value of 9680 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9680,
    rewardPoints: 4840,
    isSecret: false
  },
  {
    id: 'ach_969',
    title: 'Milestone 969',
    description: 'Reach a value of 9690 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9690,
    rewardPoints: 4845,
    isSecret: false
  },
  {
    id: 'ach_970',
    title: 'Milestone 970',
    description: 'Reach a value of 9700 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9700,
    rewardPoints: 4850,
    isSecret: true
  },
  {
    id: 'ach_971',
    title: 'Milestone 971',
    description: 'Reach a value of 9710 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9710,
    rewardPoints: 4855,
    isSecret: false
  },
  {
    id: 'ach_972',
    title: 'Milestone 972',
    description: 'Reach a value of 9720 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9720,
    rewardPoints: 4860,
    isSecret: false
  },
  {
    id: 'ach_973',
    title: 'Milestone 973',
    description: 'Reach a value of 9730 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9730,
    rewardPoints: 4865,
    isSecret: false
  },
  {
    id: 'ach_974',
    title: 'Milestone 974',
    description: 'Reach a value of 9740 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9740,
    rewardPoints: 4870,
    isSecret: false
  },
  {
    id: 'ach_975',
    title: 'Milestone 975',
    description: 'Reach a value of 9750 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9750,
    rewardPoints: 4875,
    isSecret: false
  },
  {
    id: 'ach_976',
    title: 'Milestone 976',
    description: 'Reach a value of 9760 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9760,
    rewardPoints: 4880,
    isSecret: false
  },
  {
    id: 'ach_977',
    title: 'Milestone 977',
    description: 'Reach a value of 9770 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9770,
    rewardPoints: 4885,
    isSecret: false
  },
  {
    id: 'ach_978',
    title: 'Milestone 978',
    description: 'Reach a value of 9780 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9780,
    rewardPoints: 4890,
    isSecret: false
  },
  {
    id: 'ach_979',
    title: 'Milestone 979',
    description: 'Reach a value of 9790 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9790,
    rewardPoints: 4895,
    isSecret: false
  },
  {
    id: 'ach_980',
    title: 'Milestone 980',
    description: 'Reach a value of 9800 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9800,
    rewardPoints: 4900,
    isSecret: true
  },
  {
    id: 'ach_981',
    title: 'Milestone 981',
    description: 'Reach a value of 9810 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9810,
    rewardPoints: 4905,
    isSecret: false
  },
  {
    id: 'ach_982',
    title: 'Milestone 982',
    description: 'Reach a value of 9820 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9820,
    rewardPoints: 4910,
    isSecret: false
  },
  {
    id: 'ach_983',
    title: 'Milestone 983',
    description: 'Reach a value of 9830 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9830,
    rewardPoints: 4915,
    isSecret: false
  },
  {
    id: 'ach_984',
    title: 'Milestone 984',
    description: 'Reach a value of 9840 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9840,
    rewardPoints: 4920,
    isSecret: false
  },
  {
    id: 'ach_985',
    title: 'Milestone 985',
    description: 'Reach a value of 9850 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9850,
    rewardPoints: 4925,
    isSecret: false
  },
  {
    id: 'ach_986',
    title: 'Milestone 986',
    description: 'Reach a value of 9860 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9860,
    rewardPoints: 4930,
    isSecret: false
  },
  {
    id: 'ach_987',
    title: 'Milestone 987',
    description: 'Reach a value of 9870 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9870,
    rewardPoints: 4935,
    isSecret: false
  },
  {
    id: 'ach_988',
    title: 'Milestone 988',
    description: 'Reach a value of 9880 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9880,
    rewardPoints: 4940,
    isSecret: false
  },
  {
    id: 'ach_989',
    title: 'Milestone 989',
    description: 'Reach a value of 9890 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9890,
    rewardPoints: 4945,
    isSecret: false
  },
  {
    id: 'ach_990',
    title: 'Milestone 990',
    description: 'Reach a value of 9900 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9900,
    rewardPoints: 4950,
    isSecret: true
  },
  {
    id: 'ach_991',
    title: 'Milestone 991',
    description: 'Reach a value of 9910 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9910,
    rewardPoints: 4955,
    isSecret: false
  },
  {
    id: 'ach_992',
    title: 'Milestone 992',
    description: 'Reach a value of 9920 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9920,
    rewardPoints: 4960,
    isSecret: false
  },
  {
    id: 'ach_993',
    title: 'Milestone 993',
    description: 'Reach a value of 9930 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9930,
    rewardPoints: 4965,
    isSecret: false
  },
  {
    id: 'ach_994',
    title: 'Milestone 994',
    description: 'Reach a value of 9940 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9940,
    rewardPoints: 4970,
    isSecret: false
  },
  {
    id: 'ach_995',
    title: 'Milestone 995',
    description: 'Reach a value of 9950 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9950,
    rewardPoints: 4975,
    isSecret: false
  },
  {
    id: 'ach_996',
    title: 'Milestone 996',
    description: 'Reach a value of 9960 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 9960,
    rewardPoints: 4980,
    isSecret: false
  },
  {
    id: 'ach_997',
    title: 'Milestone 997',
    description: 'Reach a value of 9970 in gameplay.',
    icon: 'Trophy',
    requirementType: 'combo',
    requirementValue: 9970,
    rewardPoints: 4985,
    isSecret: false
  },
  {
    id: 'ach_998',
    title: 'Milestone 998',
    description: 'Reach a value of 9980 in gameplay.',
    icon: 'Trophy',
    requirementType: 'games_played',
    requirementValue: 9980,
    rewardPoints: 4990,
    isSecret: false
  },
  {
    id: 'ach_999',
    title: 'Milestone 999',
    description: 'Reach a value of 9990 in gameplay.',
    icon: 'Trophy',
    requirementType: 'level',
    requirementValue: 9990,
    rewardPoints: 4995,
    isSecret: false
  },
  {
    id: 'ach_1000',
    title: 'Milestone 1000',
    description: 'Reach a value of 10000 in gameplay.',
    icon: 'Trophy',
    requirementType: 'score',
    requirementValue: 10000,
    rewardPoints: 5000,
    isSecret: true
  },
];