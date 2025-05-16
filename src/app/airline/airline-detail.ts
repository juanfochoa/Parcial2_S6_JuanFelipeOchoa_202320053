import { Airline } from './airline';

export class AirlineDetail extends Airline {
  description: string;
  foundationDate: string;
  website: string;
  businesscode: string;
  
  constructor(
    id: string, 
    name: string, 
    identityColor: string,
    description: string,
    foundationDate: string,
    website: string,
    businesscode: string
  ) {
    super(id, name, identityColor);
    this.description = description;
    this.foundationDate = foundationDate;
    this.website = website;
    this.businesscode = businesscode;
  }
}