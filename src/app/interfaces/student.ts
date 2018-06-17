export interface IStudent {
  name: string;
  registration_number: string;
  password_hash: string;
  registered_year: Date;
  stream: string;
  undergraduate: Boolean;
  subjects: {
    first: {
      semsster_1: [{name: string; code: string; }],
      semester_2: [{name: string; code: string; }]
    };
    second: {
      semsster_1: [{name: string; code: string; }],
      semester_2: [{name: string; code: string; }]
    };
    third: {
      semsster_1: [{name: string; code: string; }],
      semester_2: [{name: string; code: string; }]
    };
    fourth: {
      semsster_1: [{name: string; code: string; }],
      semester_2: [{name: string; code: string; }]
    };
  };
  repeat_subjects: {
    first: {
      semsster_1: [{name: string; code: string; }],
      semester_2: [{name: string; code: string; }]
    };
    second: {
      semsster_1: [{name: string; code: string; }],
      semester_2: [{name: string; code: string; }]
    };
    third: {
      semsster_1: [{name: string; code: string; }],
      semester_2: [{name: string; code: string; }]
    };
    fourth: {
      semsster_1: [{name: string; code: string; }],
      semester_2: [{name: string; code: string; }]
    };
  };
}
