export interface ICampaign {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  goalAmount: number;
  endDate: Date;
  createdAt: Date;
  category: string;
  userId: string;
  uniqueContributorsCount: number;
  remainingAmountNeeded: number;
  totalAmountRaised: number;
}

export interface IUser {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  hashedPassword: string | null;
  createdAt: Date;
  updatedAt: Date;
  school: string | null;
}
