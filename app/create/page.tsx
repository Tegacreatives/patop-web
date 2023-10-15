import CampaignForm from "./CampaignForm";

const CreateCampaign = () => {
  return (
    <div className="my-10 px-10 md:px-32 ">
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
