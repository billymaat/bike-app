import { User, UserRole } from '../models/user';

export const userSeedData: User[] = [
  // First 10 users: admin
  {
    id: 1,
    email: 'oliver.smith1@email.co.uk',
    firstName: 'Oliver',
    lastName: 'Smith',
    age: 28,
    address: '12 High Street, London, SW1A 1AA',
    phone: '+44 7700 900001',
    emergencyContact: {
      firstName: 'Emily',
      lastName: 'Smith',
      relationship: 'Sister',
      phone: '+44 7700 900051'
    },
    role: UserRole.admin
  },
  {
    id: 2,
    email: 'amelia.jones2@email.co.uk',
    firstName: 'Amelia',
    lastName: 'Jones',
    age: 34,
    address: '45 Queen Road, Manchester, M1 2AB',
    phone: '+44 7700 900002',
    emergencyContact: {
      firstName: 'James',
      lastName: 'Jones',
      relationship: 'Brother',
      phone: '+44 7700 900052'
    },
    role: UserRole.admin
  },
  {
    id: 3,
    email: 'harry.brown3@email.co.uk',
    firstName: 'Harry',
    lastName: 'Brown',
    age: 22,
    address: '78 King Street, Birmingham, B1 1AA',
    phone: '+44 7700 900003',
    emergencyContact: {
      firstName: 'Sophie',
      lastName: 'Brown',
      relationship: 'Mother',
      phone: '+44 7700 900053'
    },
    role: UserRole.admin
  },
  {
    id: 4,
    email: 'isla.taylor4@email.co.uk',
    firstName: 'Isla',
    lastName: 'Taylor',
    age: 29,
    address: '23 Park Lane, Bristol, BS1 5TY',
    phone: '+44 7700 900004',
    emergencyContact: {
      firstName: 'Jack',
      lastName: 'Taylor',
      relationship: 'Father',
      phone: '+44 7700 900054'
    },
    role: UserRole.admin
  },
  {
    id: 5,
    email: 'jack.wilson5@email.co.uk',
    firstName: 'Jack',
    lastName: 'Wilson',
    age: 31,
    address: '56 Victoria Road, Leeds, LS1 2HQ',
    phone: '+44 7700 900005',
    emergencyContact: {
      firstName: 'Grace',
      lastName: 'Wilson',
      relationship: 'Wife',
      phone: '+44 7700 900055'
    },
    role: UserRole.admin
  },
  {
    id: 6,
    email: 'sophie.evans6@email.co.uk',
    firstName: 'Sophie',
    lastName: 'Evans',
    age: 27,
    address: '89 Oxford Road, Liverpool, L1 8JQ',
    phone: '+44 7700 900006',
    emergencyContact: {
      firstName: 'Daniel',
      lastName: 'Evans',
      relationship: 'Brother',
      phone: '+44 7700 900056'
    },
    role: UserRole.admin
  },
  {
    id: 7,
    email: 'charlie.thomas7@email.co.uk',
    firstName: 'Charlie',
    lastName: 'Thomas',
    age: 36,
    address: '14 Castle Street, Edinburgh, EH1 2NG',
    phone: '+44 7700 900007',
    emergencyContact: {
      firstName: 'Ella',
      lastName: 'Thomas',
      relationship: 'Sister',
      phone: '+44 7700 900057'
    },
    role: UserRole.admin
  },
  {
    id: 8,
    email: 'grace.moore8@email.co.uk',
    firstName: 'Grace',
    lastName: 'Moore',
    age: 25,
    address: '67 George Square, Glasgow, G2 1DY',
    phone: '+44 7700 900008',
    emergencyContact: {
      firstName: 'Oscar',
      lastName: 'Moore',
      relationship: 'Brother',
      phone: '+44 7700 900058'
    },
    role: UserRole.admin
  },
  {
    id: 9,
    email: 'oscar.martin9@email.co.uk',
    firstName: 'Oscar',
    lastName: 'Martin',
    age: 30,
    address: '21 Market Street, Cardiff, CF10 1AU',
    phone: '+44 7700 900009',
    emergencyContact: {
      firstName: 'Mia',
      lastName: 'Martin',
      relationship: 'Sister',
      phone: '+44 7700 900059'
    },
    role: UserRole.admin
  },
  {
    id: 10,
    email: 'mia.clark10@email.co.uk',
    firstName: 'Mia',
    lastName: 'Clark',
    age: 24,
    address: '34 Bridge Road, Newcastle, NE1 2TY',
    phone: '+44 7700 900010',
    emergencyContact: {
      firstName: 'Leo',
      lastName: 'Clark',
      relationship: 'Brother',
      phone: '+44 7700 900060'
    },
    role: UserRole.admin
  },
  // Next 20 users: organizer
  {
    id: 11,
    email: 'leo.walker11@email.co.uk',
    firstName: 'Leo',
    lastName: 'Walker',
    age: 32,
    address: '11 Albert Road, Sheffield, S1 2GU',
    phone: '+44 7700 900011',
    emergencyContact: {
      firstName: 'Lily',
      lastName: 'Walker',
      relationship: 'Sister',
      phone: '+44 7700 900061'
    },
    role: UserRole.organizer
  },
  {
    id: 12,
    email: 'lily.hall12@email.co.uk',
    firstName: 'Lily',
    lastName: 'Hall',
    age: 26,
    address: '88 Church Lane, Nottingham, NG1 1AA',
    phone: '+44 7700 900012',
    emergencyContact: {
      firstName: 'Jacob',
      lastName: 'Hall',
      relationship: 'Brother',
      phone: '+44 7700 900062'
    },
    role: UserRole.organizer
  },
  {
    id: 13,
    email: 'jacob.allen13@email.co.uk',
    firstName: 'Jacob',
    lastName: 'Allen',
    age: 29,
    address: '53 Mill Road, Cambridge, CB1 2AB',
    phone: '+44 7700 900013',
    emergencyContact: {
      firstName: 'Charlotte',
      lastName: 'Allen',
      relationship: 'Sister',
      phone: '+44 7700 900063'
    },
    role: UserRole.organizer
  },
  {
    id: 14,
    email: 'charlotte.young14@email.co.uk',
    firstName: 'Charlotte',
    lastName: 'Young',
    age: 33,
    address: '19 Station Road, Oxford, OX1 1HS',
    phone: '+44 7700 900014',
    emergencyContact: {
      firstName: 'Henry',
      lastName: 'Young',
      relationship: 'Brother',
      phone: '+44 7700 900064'
    },
    role: UserRole.organizer
  },
  {
    id: 15,
    email: 'henry.king15@email.co.uk',
    firstName: 'Henry',
    lastName: 'King',
    age: 35,
    address: '72 Main Street, Leicester, LE1 1AA',
    phone: '+44 7700 900015',
    emergencyContact: {
      firstName: 'Evie',
      lastName: 'King',
      relationship: 'Sister',
      phone: '+44 7700 900065'
    },
    role: UserRole.organizer
  },
  {
    id: 16,
    email: 'evie.wright16@email.co.uk',
    firstName: 'Evie',
    lastName: 'Wright',
    age: 23,
    address: '27 North Road, Southampton, SO14 0YN',
    phone: '+44 7700 900016',
    emergencyContact: {
      firstName: 'Freddie',
      lastName: 'Wright',
      relationship: 'Brother',
      phone: '+44 7700 900066'
    },
    role: UserRole.organizer
  },
  {
    id: 17,
    email: 'freddie.scott17@email.co.uk',
    firstName: 'Freddie',
    lastName: 'Scott',
    age: 28,
    address: '39 South Street, Reading, RG1 2AA',
    phone: '+44 7700 900017',
    emergencyContact: {
      firstName: 'Poppy',
      lastName: 'Scott',
      relationship: 'Sister',
      phone: '+44 7700 900067'
    },
    role: UserRole.organizer
  },
  {
    id: 18,
    email: 'poppy.green18@email.co.uk',
    firstName: 'Poppy',
    lastName: 'Green',
    age: 27,
    address: '15 West Avenue, Coventry, CV1 1AA',
    phone: '+44 7700 900018',
    emergencyContact: {
      firstName: 'Archie',
      lastName: 'Green',
      relationship: 'Brother',
      phone: '+44 7700 900068'
    },
    role: UserRole.organizer
  },
  {
    id: 19,
    email: 'archie.baker19@email.co.uk',
    firstName: 'Archie',
    lastName: 'Baker',
    age: 31,
    address: '62 East Road, Derby, DE1 2AB',
    phone: '+44 7700 900019',
    emergencyContact: {
      firstName: 'Willow',
      lastName: 'Baker',
      relationship: 'Sister',
      phone: '+44 7700 900069'
    },
    role: UserRole.organizer
  },
  {
    id: 20,
    email: 'willow.adams20@email.co.uk',
    firstName: 'Willow',
    lastName: 'Adams',
    age: 25,
    address: '44 Southgate, Bath, BA1 1TP',
    phone: '+44 7700 900020',
    emergencyContact: {
      firstName: 'Theo',
      lastName: 'Adams',
      relationship: 'Brother',
      phone: '+44 7700 900070'
    },
    role: UserRole.organizer
  },
  {
    id: 21,
    email: 'theo.nelson21@email.co.uk',
    firstName: 'Theo',
    lastName: 'Nelson',
    age: 30,
    address: '17 Market Place, York, YO1 8SU',
    phone: '+44 7700 900021',
    emergencyContact: {
      firstName: 'Rosie',
      lastName: 'Nelson',
      relationship: 'Sister',
      phone: '+44 7700 900071'
    },
    role: UserRole.organizer
  },
  {
    id: 22,
    email: 'rosie.carter22@email.co.uk',
    firstName: 'Rosie',
    lastName: 'Carter',
    age: 28,
    address: '29 St Mary\'s Street, Swansea, SA1 3LH',
    phone: '+44 7700 900022',
    emergencyContact: {
      firstName: 'Sebastian',
      lastName: 'Carter',
      relationship: 'Brother',
      phone: '+44 7700 900072'
    },
    role: UserRole.organizer
  },
  {
    id: 23,
    email: 'sebastian.mitchell23@email.co.uk',
    firstName: 'Sebastian',
    lastName: 'Mitchell',
    age: 32,
    address: '81 Union Street, Aberdeen, AB10 1SA',
    phone: '+44 7700 900023',
    emergencyContact: {
      firstName: 'Hannah',
      lastName: 'Mitchell',
      relationship: 'Sister',
      phone: '+44 7700 900073'
    },
    role: UserRole.organizer
  },
  {
    id: 24,
    email: 'hannah.roberts24@email.co.uk',
    firstName: 'Hannah',
    lastName: 'Roberts',
    age: 26,
    address: '36 Princes Street, Dundee, DD1 2AD',
    phone: '+44 7700 900024',
    emergencyContact: {
      firstName: 'Mason',
      lastName: 'Roberts',
      relationship: 'Brother',
      phone: '+44 7700 900074'
    },
    role: UserRole.organizer
  },
  {
    id: 25,
    email: 'mason.turner25@email.co.uk',
    firstName: 'Mason',
    lastName: 'Turner',
    age: 29,
    address: '58 London Road, Belfast, BT1 5GS',
    phone: '+44 7700 900025',
    emergencyContact: {
      firstName: 'Elsie',
      lastName: 'Turner',
      relationship: 'Sister',
      phone: '+44 7700 900075'
    },
    role: UserRole.organizer
  },
  {
    id: 26,
    email: 'elsie.phillips26@email.co.uk',
    firstName: 'Elsie',
    lastName: 'Phillips',
    age: 27,
    address: '22 Regent Street, Luton, LU1 5FA',
    phone: '+44 7700 900026',
    emergencyContact: {
      firstName: 'Logan',
      lastName: 'Phillips',
      relationship: 'Brother',
      phone: '+44 7700 900076'
    },
    role: UserRole.organizer
  },
  {
    id: 27,
    email: 'logan.campbell27@email.co.uk',
    firstName: 'Logan',
    lastName: 'Campbell',
    age: 33,
    address: '73 Broad Street, Wolverhampton, WV1 1AA',
    phone: '+44 7700 900027',
    emergencyContact: {
      firstName: 'Molly',
      lastName: 'Campbell',
      relationship: 'Sister',
      phone: '+44 7700 900077'
    },
    role: UserRole.organizer
  },
  {
    id: 28,
    email: 'molly.parker28@email.co.uk',
    firstName: 'Molly',
    lastName: 'Parker',
    age: 24,
    address: '41 New Street, Plymouth, PL1 2AA',
    phone: '+44 7700 900028',
    emergencyContact: {
      firstName: 'Dylan',
      lastName: 'Parker',
      relationship: 'Brother',
      phone: '+44 7700 900078'
    },
    role: UserRole.organizer
  },
  {
    id: 29,
    email: 'dylan.edwards29@email.co.uk',
    firstName: 'Dylan',
    lastName: 'Edwards',
    age: 31,
    address: '66 Church Street, Portsmouth, PO1 1AA',
    phone: '+44 7700 900029',
    emergencyContact: {
      firstName: 'Ruby',
      lastName: 'Edwards',
      relationship: 'Sister',
      phone: '+44 7700 900079'
    },
    role: UserRole.organizer
  },
  {
    id: 30,
    email: 'ruby.collins30@email.co.uk',
    firstName: 'Ruby',
    lastName: 'Collins',
    age: 28,
    address: '13 Duke Street, Stoke-on-Trent, ST1 1AA',
    phone: '+44 7700 900030',
    emergencyContact: {
      firstName: 'Joshua',
      lastName: 'Collins',
      relationship: 'Brother',
      phone: '+44 7700 900080'
    },
    role: UserRole.organizer
  },
  {
    id: 31,
    email: 'joshua.stewart31@email.co.uk',
    firstName: 'Joshua',
    lastName: 'Stewart',
    age: 27,
    address: '25 Queen Street, Sunderland, SR1 1AA',
    phone: '+44 7700 900031',
    emergencyContact: {
      firstName: 'Florence',
      lastName: 'Stewart',
      relationship: 'Sister',
      phone: '+44 7700 900081'
    },
    role: UserRole.organizer
  },
  {
    id: 32,
    email: 'florence.morris32@email.co.uk',
    firstName: 'Florence',
    lastName: 'Morris',
    age: 29,
    address: '54 King Street, Wolverhampton, WV1 2AA',
    phone: '+44 7700 900032',
    emergencyContact: {
      firstName: 'Samuel',
      lastName: 'Morris',
      relationship: 'Brother',
      phone: '+44 7700 900082'
    },
    role: UserRole.organizer
  },
  {
    id: 33,
    email: 'samuel.ward33@email.co.uk',
    firstName: 'Samuel',
    lastName: 'Ward',
    age: 34,
    address: '38 Market Street, Bradford, BD1 1AA',
    phone: '+44 7700 900033',
    emergencyContact: {
      firstName: 'Erin',
      lastName: 'Ward',
      relationship: 'Sister',
      phone: '+44 7700 900083'
    },
    role: UserRole.organizer
  },
  {
    id: 34,
    email: 'erin.hughes34@email.co.uk',
    firstName: 'Erin',
    lastName: 'Hughes',
    age: 26,
    address: '60 Victoria Road, Kingston, KT1 1AA',
    phone: '+44 7700 900034',
    emergencyContact: {
      firstName: 'Benjamin',
      lastName: 'Hughes',
      relationship: 'Brother',
      phone: '+44 7700 900084'
    },
    role: UserRole.organizer
  },
  {
    id: 35,
    email: 'benjamin.price35@email.co.uk',
    firstName: 'Benjamin',
    lastName: 'Price',
    age: 32,
    address: '17 Albert Street, Slough, SL1 1AA',
    phone: '+44 7700 900035',
    emergencyContact: {
      firstName: 'Maisie',
      lastName: 'Price',
      relationship: 'Sister',
      phone: '+44 7700 900085'
    },
    role: UserRole.organizer
  },
  {
    id: 36,
    email: 'maisie.bennett36@email.co.uk',
    firstName: 'Maisie',
    lastName: 'Bennett',
    age: 25,
    address: '81 Park Road, Milton Keynes, MK9 1AA',
    phone: '+44 7700 900036',
    emergencyContact: {
      firstName: 'Harrison',
      lastName: 'Bennett',
      relationship: 'Brother',
      phone: '+44 7700 900086'
    },
    role: UserRole.organizer
  },
  {
    id: 37,
    email: 'harrison.wood37@email.co.uk',
    firstName: 'Harrison',
    lastName: 'Wood',
    age: 28,
    address: '44 London Road, Reading, RG1 4AA',
    phone: '+44 7700 900037',
    emergencyContact: {
      firstName: 'Lola',
      lastName: 'Wood',
      relationship: 'Sister',
      phone: '+44 7700 900087'
    },
    role: UserRole.organizer
  },
  {
    id: 38,
    email: 'lola.barnes38@email.co.uk',
    firstName: 'Lola',
    lastName: 'Barnes',
    age: 27,
    address: '12 Oxford Street, Blackpool, FY1 1AA',
    phone: '+44 7700 900038',
    emergencyContact: {
      firstName: 'Matthew',
      lastName: 'Barnes',
      relationship: 'Brother',
      phone: '+44 7700 900088'
    },
    role: UserRole.organizer
  },
  {
    id: 39,
    email: 'matthew.ross39@email.co.uk',
    firstName: 'Matthew',
    lastName: 'Ross',
    age: 31,
    address: '29 Queen Street, Preston, PR1 1AA',
    phone: '+44 7700 900039',
    emergencyContact: {
      firstName: 'Sienna',
      lastName: 'Ross',
      relationship: 'Sister',
      phone: '+44 7700 900089'
    },
    role: UserRole.organizer
  },
  {
    id: 40,
    email: 'sienna.harrison40@email.co.uk',
    firstName: 'Sienna',
    lastName: 'Harrison',
    age: 24,
    address: '53 King Street, Newport, NP20 1AA',
    phone: '+44 7700 900040',
    emergencyContact: {
      firstName: 'Harvey',
      lastName: 'Harrison',
      relationship: 'Brother',
      phone: '+44 7700 900090'
    },
    role: UserRole.organizer
  },
  {
    id: 41,
    email: 'harvey.cooper41@email.co.uk',
    firstName: 'Harvey',
    lastName: 'Cooper',
    age: 29,
    address: '66 Market Street, Chelmsford, CM1 1AA',
    phone: '+44 7700 900041',
    emergencyContact: {
      firstName: 'Phoebe',
      lastName: 'Cooper',
      relationship: 'Sister',
      phone: '+44 7700 900091'
    },
    role: UserRole.organizer
  },
  {
    id: 42,
    email: 'phoebe.richards42@email.co.uk',
    firstName: 'Phoebe',
    lastName: 'Richards',
    age: 27,
    address: '17 Duke Street, Colchester, CO1 1AA',
    phone: '+44 7700 900042',
    emergencyContact: {
      firstName: 'Reuben',
      lastName: 'Richards',
      relationship: 'Brother',
      phone: '+44 7700 900092'
    },
    role: UserRole.organizer
  },
  {
    id: 43,
    email: 'reuben.cox43@email.co.uk',
    firstName: 'Reuben',
    lastName: 'Cox',
    age: 33,
    address: '81 Queen Street, Maidstone, ME14 1AA',
    phone: '+44 7700 900043',
    emergencyContact: {
      firstName: 'Jessica',
      lastName: 'Cox',
      relationship: 'Sister',
      phone: '+44 7700 900093'
    },
    role: UserRole.organizer
  },
  {
    id: 44,
    email: 'jessica.gray44@email.co.uk',
    firstName: 'Jessica',
    lastName: 'Gray',
    age: 25,
    address: '44 King Street, Woking, GU21 1AA',
    phone: '+44 7700 900044',
    emergencyContact: {
      firstName: 'Edward',
      lastName: 'Gray',
      relationship: 'Brother',
      phone: '+44 7700 900094'
    },
    role: UserRole.organizer
  },
  {
    id: 45,
    email: 'edward.murray45@email.co.uk',
    firstName: 'Edward',
    lastName: 'Murray',
    age: 30,
    address: '12 Victoria Road, Basingstoke, RG21 1AA',
    phone: '+44 7700 900045',
    emergencyContact: {
      firstName: 'Harriet',
      lastName: 'Murray',
      relationship: 'Sister',
      phone: '+44 7700 900095'
    },
    role: UserRole.organizer
  },
  {
    id: 46,
    email: 'harriet.mason46@email.co.uk',
    firstName: 'Harriet',
    lastName: 'Mason',
    age: 28,
    address: '29 Albert Street, Guildford, GU1 1AA',
    phone: '+44 7700 900046',
    emergencyContact: {
      firstName: 'Frankie',
      lastName: 'Mason',
      relationship: 'Brother',
      phone: '+44 7700 900096'
    },
    role: UserRole.organizer
  },
  {
    id: 47,
    email: 'frankie.hunt47@email.co.uk',
    firstName: 'Frankie',
    lastName: 'Hunt',
    age: 27,
    address: '53 Park Lane, Watford, WD17 1AA',
    phone: '+44 7700 900047',
    emergencyContact: {
      firstName: 'Bella',
      lastName: 'Hunt',
      relationship: 'Sister',
      phone: '+44 7700 900097'
    },
    role: UserRole.organizer
  },
  {
    id: 48,
    email: 'bella.matthews48@email.co.uk',
    firstName: 'Bella',
    lastName: 'Matthews',
    age: 26,
    address: '81 High Street, Crawley, RH10 1AA',
    phone: '+44 7700 900048',
    emergencyContact: {
      firstName: 'Toby',
      lastName: 'Matthews',
      relationship: 'Brother',
      phone: '+44 7700 900098'
    },
    role: UserRole.organizer
  },
  {
    id: 49,
    email: 'toby.knight49@email.co.uk',
    firstName: 'Toby',
    lastName: 'Knight',
    age: 32,
    address: '44 Queen Street, Hemel Hempstead, HP1 1AA',
    phone: '+44 7700 900049',
    emergencyContact: {
      firstName: 'Summer',
      lastName: 'Knight',
      relationship: 'Sister',
      phone: '+44 7700 900099'
    },
    role: UserRole.organizer
  },
  {
    id: 50,
    email: 'summer.holmes50@email.co.uk',
    firstName: 'Summer',
    lastName: 'Holmes',
    age: 24,
    address: '12 King Street, Stevenage, SG1 1AA',
    phone: '+44 7700 900050',
    emergencyContact: {
      firstName: 'Louis',
      lastName: 'Holmes',
      relationship: 'Brother',
      phone: '+44 7700 900100'
    },
    role: UserRole.organizer
  },
  // Remaining users: member
  {
    id: 51,
    email: 'louis.mills51@email.co.uk',
    firstName: 'Louis',
    lastName: 'Mills',
    age: 28,
    address: '29 Victoria Road, Harlow, CM20 1AA',
    phone: '+44 7700 900051',
    emergencyContact: {
      firstName: 'Ellie',
      lastName: 'Mills',
      relationship: 'Sister',
      phone: '+44 7700 900101'
    },
    role: UserRole.member
  },
  {
    id: 52,
    email: 'ellie.hamilton52@email.co.uk',
    firstName: 'Ellie',
    lastName: 'Hamilton',
    age: 27,
    address: '53 Albert Street, Basildon, SS14 1AA',
    phone: '+44 7700 900052',
    emergencyContact: {
      firstName: 'Jude',
      lastName: 'Hamilton',
      relationship: 'Brother',
      phone: '+44 7700 900102'
    },
    role: UserRole.member
  },
  {
    id: 53,
    email: 'jude.graham53@email.co.uk',
    firstName: 'Jude',
    lastName: 'Graham',
    age: 31,
    address: '81 Park Road, Southend, SS1 1AA',
    phone: '+44 7700 900053',
    emergencyContact: {
      firstName: 'Nancy',
      lastName: 'Graham',
      relationship: 'Sister',
      phone: '+44 7700 900103'
    },
    role: UserRole.member
  },
  {
    id: 54,
    email: 'nancy.sullivan54@email.co.uk',
    firstName: 'Nancy',
    lastName: 'Sullivan',
    age: 25,
    address: '44 King Street, Worthing, BN11 1AA',
    phone: '+44 7700 900054',
    emergencyContact: {
      firstName: 'Stanley',
      lastName: 'Sullivan',
      relationship: 'Brother',
      phone: '+44 7700 900104'
    },
    role: UserRole.member
  },
  {
    id: 55,
    email: 'stanley.wallace55@email.co.uk',
    firstName: 'Stanley',
    lastName: 'Wallace',
    age: 29,
    address: '12 Queen Street, Bexley, DA5 1AA',
    phone: '+44 7700 900055',
    emergencyContact: {
      firstName: 'Martha',
      lastName: 'Wallace',
      relationship: 'Sister',
      phone: '+44 7700 900105'
    },
    role: UserRole.member
  },
  {
    id: 56,
    email: 'martha.west56@email.co.uk',
    firstName: 'Martha',
    lastName: 'West',
    age: 26,
    address: '29 Victoria Road, Bromley, BR1 1AA',
    phone: '+44 7700 900056',
    emergencyContact: {
      firstName: 'Alex',
      lastName: 'West',
      relationship: 'Brother',
      phone: '+44 7700 900106'
    },
    role: UserRole.member
  },
  {
    id: 57,
    email: 'alex.burns57@email.co.uk',
    firstName: 'Alex',
    lastName: 'Burns',
    age: 30,
    address: '53 Albert Street, Sutton, SM1 1AA',
    phone: '+44 7700 900057',
    emergencyContact: {
      firstName: 'Heidi',
      lastName: 'Burns',
      relationship: 'Sister',
      phone: '+44 7700 900107'
    },
    role: UserRole.member
  },
  {
    id: 58,
    email: 'heidi.spencer58@email.co.uk',
    firstName: 'Heidi',
    lastName: 'Spencer',
    age: 28,
    address: '81 Park Road, Enfield, EN1 1AA',
    phone: '+44 7700 900058',
    emergencyContact: {
      firstName: 'Leon',
      lastName: 'Spencer',
      relationship: 'Brother',
      phone: '+44 7700 900108'
    },
    role: UserRole.member
  },
  {
    id: 59,
    email: 'leon.hart59@email.co.uk',
    firstName: 'Leon',
    lastName: 'Hart',
    age: 27,
    address: '44 King Street, Barnet, EN5 1AA',
    phone: '+44 7700 900059',
    emergencyContact: {
      firstName: 'Zara',
      lastName: 'Hart',
      relationship: 'Sister',
      phone: '+44 7700 900109'
    },
    role: UserRole.member
  },
  {
    id: 60,
    email: 'zara.elliott60@email.co.uk',
    firstName: 'Zara',
    lastName: 'Elliott',
    age: 25,
    address: '12 Queen Street, Croydon, CR0 1AA',
    phone: '+44 7700 900060',
    emergencyContact: {
      firstName: 'Blake',
      lastName: 'Elliott',
      relationship: 'Brother',
      phone: '+44 7700 900110'
    },
    role: UserRole.member
  },
  {
    id: 61,
    email: 'blake.davies61@email.co.uk',
    firstName: 'Blake',
    lastName: 'Davies',
    age: 29,
    address: '29 Victoria Road, Ealing, W5 1AA',
    phone: '+44 7700 900061',
    emergencyContact: {
      firstName: 'Megan',
      lastName: 'Davies',
      relationship: 'Sister',
      phone: '+44 7700 900111'
    },
    role: UserRole.member
  },
  {
    id: 62,
    email: 'megan.elliott62@email.co.uk',
    firstName: 'Megan',
    lastName: 'Elliott',
    age: 26,
    address: '53 Albert Street, Harrow, HA1 1AA',
    phone: '+44 7700 900062',
    emergencyContact: {
      firstName: 'Elliot',
      lastName: 'Elliott',
      relationship: 'Brother',
      phone: '+44 7700 900112'
    },
    role: UserRole.member
  },
  {
    id: 63,
    email: 'elliot.howard63@email.co.uk',
    firstName: 'Elliot',
    lastName: 'Howard',
    age: 31,
    address: '81 Park Road, Hounslow, TW3 1AA',
    phone: '+44 7700 900063',
    emergencyContact: {
      firstName: 'Maddison',
      lastName: 'Howard',
      relationship: 'Sister',
      phone: '+44 7700 900113'
    },
    role: UserRole.member
  },
  {
    id: 64,
    email: 'maddison.harrison64@email.co.uk',
    firstName: 'Maddison',
    lastName: 'Harrison',
    age: 28,
    address: '44 King Street, Ilford, IG1 1AA',
    phone: '+44 7700 900064',
    emergencyContact: {
      firstName: 'Jaxon',
      lastName: 'Harrison',
      relationship: 'Brother',
      phone: '+44 7700 900114'
    },
    role: UserRole.member
  },
  {
    id: 65,
    email: 'jaxon.morris65@email.co.uk',
    firstName: 'Jaxon',
    lastName: 'Morris',
    age: 27,
    address: '12 Queen Street, Redbridge, IG4 1AA',
    phone: '+44 7700 900065',
    emergencyContact: {
      firstName: 'Darcie',
      lastName: 'Morris',
      relationship: 'Sister',
      phone: '+44 7700 900115'
    },
    role: UserRole.member
  },
  {
    id: 66,
    email: 'darcie.morgan66@email.co.uk',
    firstName: 'Darcie',
    lastName: 'Morgan',
    age: 25,
    address: '29 Victoria Road, Richmond, TW9 1AA',
    phone: '+44 7700 900066',
    emergencyContact: {
      firstName: 'Roman',
      lastName: 'Morgan',
      relationship: 'Brother',
      phone: '+44 7700 900116'
    },
    role: UserRole.member
  },
  {
    id: 67,
    email: 'roman.bell67@email.co.uk',
    firstName: 'Roman',
    lastName: 'Bell',
    age: 29,
    address: '53 Albert Street, Kingston, KT2 1AA',
    phone: '+44 7700 900067',
    emergencyContact: {
      firstName: 'Ava',
      lastName: 'Bell',
      relationship: 'Sister',
      phone: '+44 7700 900117'
    },
    role: UserRole.member
  },
  {
    id: 68,
    email: 'ava.ward68@email.co.uk',
    firstName: 'Ava',
    lastName: 'Ward',
    age: 26,
    address: '81 Park Road, Bromley, BR2 1AA',
    phone: '+44 7700 900068',
    emergencyContact: {
      firstName: 'Hunter',
      lastName: 'Ward',
      relationship: 'Brother',
      phone: '+44 7700 900118'
    },
    role: UserRole.member
  },
  {
    id: 69,
    email: 'hunter.brooks69@email.co.uk',
    firstName: 'Hunter',
    lastName: 'Brooks',
    age: 31,
    address: '44 King Street, Sutton, SM2 1AA',
    phone: '+44 7700 900069',
    emergencyContact: {
      firstName: 'Lilly',
      lastName: 'Brooks',
      relationship: 'Sister',
      phone: '+44 7700 900119'
    },
    role: UserRole.member
  },
  {
    id: 70,
    email: 'lilly.bennett70@email.co.uk',
    firstName: 'Lilly',
    lastName: 'Bennett',
    age: 28,
    address: '12 Queen Street, Croydon, CR2 1AA',
    phone: '+44 7700 900070',
    emergencyContact: {
      firstName: 'Jesse',
      lastName: 'Bennett',
      relationship: 'Brother',
      phone: '+44 7700 900120'
    },
    role: UserRole.member
  },
  {
    id: 71,
    email: 'jesse.hamilton71@email.co.uk',
    firstName: 'Jesse',
    lastName: 'Hamilton',
    age: 27,
    address: '29 Victoria Road, Hillingdon, UB8 1AA',
    phone: '+44 7700 900071',
    emergencyContact: {
      firstName: 'Mila',
      lastName: 'Hamilton',
      relationship: 'Sister',
      phone: '+44 7700 900121'
    },
    role: UserRole.member
  },
  {
    id: 72,
    email: 'mila.harrison72@email.co.uk',
    firstName: 'Mila',
    lastName: 'Harrison',
    age: 25,
    address: '53 Albert Street, Brent, NW10 1AA',
    phone: '+44 7700 900072',
    emergencyContact: {
      firstName: 'Rory',
      lastName: 'Harrison',
      relationship: 'Brother',
      phone: '+44 7700 900122'
    },
    role: UserRole.member
  },
  {
    id: 73,
    email: 'rory.matthews73@email.co.uk',
    firstName: 'Rory',
    lastName: 'Matthews',
    age: 29,
    address: '81 Park Road, Barnet, EN4 1AA',
    phone: '+44 7700 900073',
    emergencyContact: {
      firstName: 'Maya',
      lastName: 'Matthews',
      relationship: 'Sister',
      phone: '+44 7700 900123'
    },
    role: UserRole.member
  },
  {
    id: 74,
    email: 'maya.murray74@email.co.uk',
    firstName: 'Maya',
    lastName: 'Murray',
    age: 26,
    address: '44 King Street, Camden, NW1 1AA',
    phone: '+44 7700 900074',
    emergencyContact: {
      firstName: 'Ethan',
      lastName: 'Murray',
      relationship: 'Brother',
      phone: '+44 7700 900124'
    },
    role: UserRole.member
  },
  {
    id: 75,
    email: 'ethan.mason75@email.co.uk',
    firstName: 'Ethan',
    lastName: 'Mason',
    age: 31,
    address: '12 Queen Street, Islington, N1 1AA',
    phone: '+44 7700 900075',
    emergencyContact: {
      firstName: 'Layla',
      lastName: 'Mason',
      relationship: 'Sister',
      phone: '+44 7700 900125'
    },
    role: UserRole.member
  },
  {
    id: 76,
    email: 'layla.hunt76@email.co.uk',
    firstName: 'Layla',
    lastName: 'Hunt',
    age: 28,
    address: '29 Victoria Road, Hackney, E8 1AA',
    phone: '+44 7700 900076',
    emergencyContact: {
      firstName: 'Tommy',
      lastName: 'Hunt',
      relationship: 'Brother',
      phone: '+44 7700 900126'
    },
    role: UserRole.member
  },
  {
    id: 77,
    email: 'tommy.holmes77@email.co.uk',
    firstName: 'Tommy',
    lastName: 'Holmes',
    age: 27,
    address: '53 Albert Street, Tower Hamlets, E1 1AA',
    phone: '+44 7700 900077',
    emergencyContact: {
      firstName: 'Lottie',
      lastName: 'Holmes',
      relationship: 'Sister',
      phone: '+44 7700 900127'
    },
    role: UserRole.member
  },
  {
    id: 78,
    email: 'lottie.mills78@email.co.uk',
    firstName: 'Lottie',
    lastName: 'Mills',
    age: 25,
    address: '81 Park Road, Newham, E6 1AA',
    phone: '+44 7700 900078',
    emergencyContact: {
      firstName: 'Ralph',
      lastName: 'Mills',
      relationship: 'Brother',
      phone: '+44 7700 900128'
    },
    role: UserRole.member
  },
  {
    id: 79,
    email: 'ralph.hamilton79@email.co.uk',
    firstName: 'Ralph',
    lastName: 'Hamilton',
    age: 29,
    address: '44 King Street, Waltham Forest, E17 1AA',
    phone: '+44 7700 900079',
    emergencyContact: {
      firstName: 'Heidi',
      lastName: 'Hamilton',
      relationship: 'Sister',
      phone: '+44 7700 900129'
    },
    role: UserRole.member
  },
  {
    id: 80,
    email: 'heidi.graham80@email.co.uk',
    firstName: 'Heidi',
    lastName: 'Graham',
    age: 26,
    address: '12 Queen Street, Haringey, N8 1AA',
    phone: '+44 7700 900080',
    emergencyContact: {
      firstName: 'Jasper',
      lastName: 'Graham',
      relationship: 'Brother',
      phone: '+44 7700 900130'
    },
    role: UserRole.member
  },
  {
    id: 81,
    email: 'jasper.sullivan81@email.co.uk',
    firstName: 'Jasper',
    lastName: 'Sullivan',
    age: 31,
    address: '29 Victoria Road, Lewisham, SE13 1AA',
    phone: '+44 7700 900081',
    emergencyContact: {
      firstName: 'Arabella',
      lastName: 'Sullivan',
      relationship: 'Sister',
      phone: '+44 7700 900131'
    },
    role: UserRole.member
  },
  {
    id: 82,
    email: 'arabella.wallace82@email.co.uk',
    firstName: 'Arabella',
    lastName: 'Wallace',
    age: 28,
    address: '53 Albert Street, Greenwich, SE10 1AA',
    phone: '+44 7700 900082',
    emergencyContact: {
      firstName: 'Austin',
      lastName: 'Wallace',
      relationship: 'Brother',
      phone: '+44 7700 900132'
    },
    role: UserRole.member
  },
  {
    id: 83,
    email: 'austin.west83@email.co.uk',
    firstName: 'Austin',
    lastName: 'West',
    age: 27,
    address: '81 Park Road, Bexley, DA6 1AA',
    phone: '+44 7700 900083',
    emergencyContact: {
      firstName: 'Bonnie',
      lastName: 'West',
      relationship: 'Sister',
      phone: '+44 7700 900133'
    },
    role: UserRole.member
  },
  {
    id: 84,
    email: 'bonnie.burns84@email.co.uk',
    firstName: 'Bonnie',
    lastName: 'Burns',
    age: 25,
    address: '44 King Street, Bromley, BR3 1AA',
    phone: '+44 7700 900084',
    emergencyContact: {
      firstName: 'Caleb',
      lastName: 'Burns',
      relationship: 'Brother',
      phone: '+44 7700 900134'
    },
    role: UserRole.member
  },
  {
    id: 85,
    email: 'caleb.spencer85@email.co.uk',
    firstName: 'Caleb',
    lastName: 'Spencer',
    age: 29,
    address: '12 Queen Street, Croydon, CR3 1AA',
    phone: '+44 7700 900085',
    emergencyContact: {
      firstName: 'Clara',
      lastName: 'Spencer',
      relationship: 'Sister',
      phone: '+44 7700 900135'
    },
    role: UserRole.member
  },
  {
    id: 86,
    email: 'clara.hart86@email.co.uk',
    firstName: 'Clara',
    lastName: 'Hart',
    age: 26,
    address: '29 Victoria Road, Ealing, W5 2AA',
    phone: '+44 7700 900086',
    emergencyContact: {
      firstName: 'Eden',
      lastName: 'Hart',
      relationship: 'Brother',
      phone: '+44 7700 900136'
    },
    role: UserRole.member
  },
  {
    id: 87,
    email: 'eden.elliott87@email.co.uk',
    firstName: 'Eden',
    lastName: 'Elliott',
    age: 31,
    address: '53 Albert Street, Harrow, HA2 1AA',
    phone: '+44 7700 900087',
    emergencyContact: {
      firstName: 'Felix',
      lastName: 'Elliott',
      relationship: 'Brother',
      phone: '+44 7700 900137'
    },
    role: UserRole.member
  },
  {
    id: 88,
    email: 'felix.howard88@email.co.uk',
    firstName: 'Felix',
    lastName: 'Howard',
    age: 28,
    address: '81 Park Road, Hounslow, TW4 1AA',
    phone: '+44 7700 900088',
    emergencyContact: {
      firstName: 'Gracie',
      lastName: 'Howard',
      relationship: 'Sister',
      phone: '+44 7700 900138'
    },
    role: UserRole.member
  },
  {
    id: 89,
    email: 'gracie.harrison89@email.co.uk',
    firstName: 'Gracie',
    lastName: 'Harrison',
    age: 27,
    address: '44 King Street, Ilford, IG2 1AA',
    phone: '+44 7700 900089',
    emergencyContact: {
      firstName: 'Harley',
      lastName: 'Harrison',
      relationship: 'Brother',
      phone: '+44 7700 900139'
    },
    role: UserRole.member
  },
  {
    id: 90,
    email: 'harley.morris90@email.co.uk',
    firstName: 'Harley',
    lastName: 'Morris',
    age: 25,
    address: '12 Queen Street, Redbridge, IG5 1AA',
    phone: '+44 7700 900090',
    emergencyContact: {
      firstName: 'Ivy',
      lastName: 'Morris',
      relationship: 'Sister',
      phone: '+44 7700 900140'
    },
    role: UserRole.member
  },
  {
    id: 91,
    email: 'ivy.morgan91@email.co.uk',
    firstName: 'Ivy',
    lastName: 'Morgan',
    age: 29,
    address: '29 Victoria Road, Richmond, TW10 1AA',
    phone: '+44 7700 900091',
    emergencyContact: {
      firstName: 'Jayden',
      lastName: 'Morgan',
      relationship: 'Brother',
      phone: '+44 7700 900141'
    },
    role: UserRole.member
  },
  {
    id: 92,
    email: 'jayden.bell92@email.co.uk',
    firstName: 'Jayden',
    lastName: 'Bell',
    age: 26,
    address: '53 Albert Street, Kingston, KT3 1AA',
    phone: '+44 7700 900092',
    emergencyContact: {
      firstName: 'Katie',
      lastName: 'Bell',
      relationship: 'Sister',
      phone: '+44 7700 900142'
    },
    role: UserRole.member
  },
  {
    id: 93,
    email: 'katie.ward93@email.co.uk',
    firstName: 'Katie',
    lastName: 'Ward',
    age: 31,
    address: '81 Park Road, Bromley, BR4 1AA',
    phone: '+44 7700 900093',
    emergencyContact: {
      firstName: 'Luca',
      lastName: 'Ward',
      relationship: 'Brother',
      phone: '+44 7700 900143'
    },
    role: UserRole.member
  },
  {
    id: 94,
    email: 'luca.brooks94@email.co.uk',
    firstName: 'Luca',
    lastName: 'Brooks',
    age: 28,
    address: '44 King Street, Sutton, SM3 1AA',
    phone: '+44 7700 900094',
    emergencyContact: {
      firstName: 'Maddie',
      lastName: 'Brooks',
      relationship: 'Sister',
      phone: '+44 7700 900144'
    },
    role: UserRole.member
  },
  {
    id: 95,
    email: 'maddie.bennett95@email.co.uk',
    firstName: 'Maddie',
    lastName: 'Bennett',
    age: 27,
    address: '12 Queen Street, Croydon, CR4 1AA',
    phone: '+44 7700 900095',
    emergencyContact: {
      firstName: 'Nathan',
      lastName: 'Bennett',
      relationship: 'Brother',
      phone: '+44 7700 900145'
    },
    role: UserRole.member
  },
  {
    id: 96,
    email: 'nathan.hamilton96@email.co.uk',
    firstName: 'Nathan',
    lastName: 'Hamilton',
    age: 25,
    address: '29 Victoria Road, Hillingdon, UB9 1AA',
    phone: '+44 7700 900096',
    emergencyContact: {
      firstName: 'Olivia',
      lastName: 'Hamilton',
      relationship: 'Sister',
      phone: '+44 7700 900146'
    },
    role: UserRole.member
  },
  {
    id: 97,
    email: 'olivia.harrison97@email.co.uk',
    firstName: 'Olivia',
    lastName: 'Harrison',
    age: 29,
    address: '53 Albert Street, Brent, NW11 1AA',
    phone: '+44 7700 900097',
    emergencyContact: {
      firstName: 'Parker',
      lastName: 'Harrison',
      relationship: 'Brother',
      phone: '+44 7700 900147'
    },
    role: UserRole.member
  },
  {
    id: 98,
    email: 'parker.matthews98@email.co.uk',
    firstName: 'Parker',
    lastName: 'Matthews',
    age: 26,
    address: '81 Park Road, Barnet, EN5 2AA',
    phone: '+44 7700 900098',
    emergencyContact: {
      firstName: 'Quinn',
      lastName: 'Matthews',
      relationship: 'Sister',
      phone: '+44 7700 900148'
    },
    role: UserRole.member
  },
  {
    id: 99,
    email: 'quinn.murray99@email.co.uk',
    firstName: 'Quinn',
    lastName: 'Murray',
    age: 31,
    address: '44 King Street, Camden, NW2 1AA',
    phone: '+44 7700 900099',
    emergencyContact: {
      firstName: 'Rose',
      lastName: 'Murray',
      relationship: 'Sister',
      phone: '+44 7700 900149'
    },
    role: UserRole.member
  },
  {
    id: 100,
    email: 'rose.mason100@email.co.uk',
    firstName: 'Rose',
    lastName: 'Mason',
    age: 28,
    address: '12 Queen Street, Islington, N2 1AA',
    phone: '+44 7700 900100',
    emergencyContact: {
      firstName: 'Samuel',
      lastName: 'Mason',
      relationship: 'Brother',
      phone: '+44 7700 900150'
    },
    role: UserRole.member
  }
];