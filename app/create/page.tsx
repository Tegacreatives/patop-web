import CampaignForm from "./CampaignForm";
import getCurrentUser from "../actions/getCurrentUser";
import UnauthorizedState from "@/components/UnauthorizedState";

const CreateCampaign = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <UnauthorizedState actionTitle="create a campaign" />;
  }
  return (
    <div className="py-10 px-10 md:px-32 ">
      <h1 className="text-4xl md:text-6xl text-gray-900 mb-5">
        Create a new Project
      </h1>
      <h3 className="text-2xl md:text-3xl text-gray-900 mb-5">
        Enter the details to create the project
      </h3>
      <CampaignForm />
    </div>
  );
};

export default CreateCampaign;
