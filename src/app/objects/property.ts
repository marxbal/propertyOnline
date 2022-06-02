export class Property {
  type: number;
  firstName: string;
  middleName: string;
  lastName: string;
  birthday: Date;
  gender: number;
  address1: string;

  clientCategory: string;
  clientName: string;
  mobileNumber: string;
  emailAddress: string;

  //p30
  policyNumber: string;
  subLine: string;
  effectivityDate: Date;
  expirationDate: Date;
  paymentPlanCode: number;
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
  zip: string;
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
