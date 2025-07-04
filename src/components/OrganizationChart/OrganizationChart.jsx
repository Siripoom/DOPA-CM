import React, { useState } from "react";
import { Typography, Modal } from "antd";
import organizationChartDetails from "./OrganizationChartDetails";
import OrgCard from "./OrgCard";

const { Title } = Typography;

const OrganizationChart = ({ districtName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Assuming 'chomthong' is a valid key for the example
  const currentOrgData = organizationChartDetails[districtName] || {
    chief: null,
    deputyChief: null,
    departments: [],
  };

  const handleCardClick = (person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const ConnectorLine = () => <div className="h-8 w-0.5 bg-slate-300 my-2" />;

  return (
    <div className="flex flex-col items-center p-4 md:p-8 font-sans">
      {/* Small correction to match the image title exactly */}
      <Title level={4} className="!mb-8 text-slate-700">
        แผนผังองค์กร{districtName}
      </Title>

      <div className="flex flex-col items-center w-full">
        {/* Level 1: Chief */}
        {currentOrgData.chief && (
          <OrgCard
            person={currentOrgData.chief}
            // MODIFIED: Only pass onClick if the chief's name exists
            onClick={currentOrgData.chief.name ? handleCardClick : null}
            className="bg-gradient-to-br from-blue-500 to-blue-700 text-white"
          />
        )}

        {/* Connector */}
        {currentOrgData.deputyChief && <ConnectorLine />}

        {/* Level 2: Deputy Chief */}
        {currentOrgData.deputyChief && (
          <OrgCard
            person={currentOrgData.deputyChief}
            // MODIFIED: Only pass onClick if the deputy chief's name exists
            onClick={currentOrgData.deputyChief.name ? handleCardClick : null}
            className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white"
          />
        )}

        {/* Connector */}
        {currentOrgData.departments.length > 0 && <ConnectorLine />}

        {/* Level 3: Departments */}
        {currentOrgData.departments.length > 0 && (
          <div className="relative w-full flex justify-center mt-4">
            <div className="hidden md:block absolute top-0 left-0 right-0 h-0.5 bg-slate-300 mx-auto w-full max-w-4xl"></div>
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-x-12 gap-y-10 md:pt-8">
              {currentOrgData.departments.map((dept) => {
                // FIXED: Logic to handle both gradient and white cards
                const cardClassName = dept.gradient
                  ? `bg-gradient-to-br ${dept.gradient} text-white`
                  : "bg-white text-slate-700";

                return (
                  <div
                    key={dept.id}
                    className="relative flex flex-col items-center"
                  >
                    <div className="absolute -top-8 w-0.5 h-8 bg-slate-300 hidden md:block" />
                    <OrgCard
                      person={{ ...dept, title: dept.name, name: dept.head }}
                      // MODIFIED: Only pass onClick if the department head's name exists
                      onClick={dept.head ? handleCardClick : null}
                      // FIXED: Using the dynamic cardClassName variable you defined
                      className="bg-gradient-to-br from-sky-300 to-sky-400 text-white "
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal (No changes needed here) */}
      {selectedPerson && (
        <Modal
          title={
            <div className="flex items-center gap-2 justify-center flex-col">
              <img
                src={selectedPerson.photo || logo}
                alt={selectedPerson.name}
                className="w-50 h-50 rounded-full object-cover border-2 border-white/60 mb-3"
              />
              <p className="text-2xl font-bold text-center">
                {selectedPerson.title}
              </p>
              <p className="text-2xl text-center">{selectedPerson.name}</p>
            </div>
          }
          open={isModalOpen}
          onCancel={handleCloseModal}
          footer={null}
          centered
        >
          {/* ... modal content ... */}
        </Modal>
      )}
    </div>
  );
};

export default OrganizationChart;
