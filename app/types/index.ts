export interface ICampaign {
  id: string;
  title: string;
  endDate: Date;
  totalAmountRaised: number;
  goalAmount: number;
  uniqueContributorsCount: number;
  remainingAmountNeeded: number;
  category: string;
}
