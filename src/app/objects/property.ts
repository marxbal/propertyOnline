export class Property {

  clientCategory: string;
  clientName: string;
  contactNumber: string;
  emailAddress: string;

  //p30
  policyNumber: string;
  subLine: string;
  effectivityDate: string;
  expirateionDate: string;
  paymentMethod: string;
  policyGroupCode: string;
  contractCode: number;
  subContractCode: number;
  documentType: string;
  documentCode: string;
  agentCode: number;
  branchCode: number;
  userCode: string;

  //p31
  product: number;
  
  //p20
  district: string;
  blockNumber: string;
  zipCode: string;
  buildingContent: string;
  ratePercentage: number;
  buildingNumber: string;
  village: string;
  buildingName: string;
  streetName: string;
  barangay: string;
  region: string;
  province: string;
  city: string;
  constructionOfBuilding: string;
  occupancyOfBuilding: string;
  front: string;
  right: string;
  left: string;
  rear: string;
  relatedStructureDetails: any[];
  relatedContentDetails: any[];
  // secondaryPolicyHolderSeparator: string;

  buildingCapital: string;
  contentValue: string;
  yearBuilt: string;
  numberOfFloors: string;
  
  garage: string;
  kitchen: string;
  gazebo: string;
  swimmingPool: string;
  fence: string;

  lossHistory: string;
  previousInsurer: string;
}
