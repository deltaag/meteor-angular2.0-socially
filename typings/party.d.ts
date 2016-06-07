interface Party {
  _id?: string;
  name: string;
  description?: string;
  owner?: string;
  public: boolean;
  location: {
    name: string;
    lat?: number;
    lng?: number;
  };
  images?: Array<string>,
  invited?: Array<string>;
  rsvps?: Array<RSVP>;
}

interface RSVP {
  userId: string;
  response: string;
}
