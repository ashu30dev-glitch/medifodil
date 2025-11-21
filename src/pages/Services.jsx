// src/pages/Services.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";

// Import all service components
import PharmacovigilanceService from "./services/PharmacovigilanceService";
import MedicalWritingService from "./services/MedicalWritingService";
import RegulatoryComplianceService from "./services/RegulatoryComplianceService";
import ClinicalResearchService from "./services/ClinicalResearchService";
import IntellectualPropertyService from "./services/IntellectualPropertyService";
import QMSTechnologyService from "./services/QMSTechnologyService";

export default function Services() {
  const { serviceName } = useParams();

  // If no specific service is selected, show the ServiceCard overview
  if (!serviceName) {
    return <ServiceCard />;
  }

  const services = [
    { id: 'pharmacovigilance', name: 'Pharmacovigilance', component: PharmacovigilanceService },
    { id: 'medical-writing', name: 'Medical Writing', component: MedicalWritingService },
    { id: 'regulatory-compliance', name: 'Regulatory', component: RegulatoryComplianceService },
    { id: 'clinical-research', name: 'Clinical Research', component: ClinicalResearchService },
    { id: 'intellectual-property', name: 'IP & Commercialization', component: IntellectualPropertyService },
    { id: 'qms-technology', name: 'QMS & Technology', component: QMSTechnologyService }
  ];

  // Find the active service
  const activeService = services.find(s => s.id === serviceName);
  
  // If service not found, show overview
  if (!activeService) {
    return <ServiceCard />;
  }

  const ActiveComponent = activeService.component;

  return (
    <motion.div
      key={activeService.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ActiveComponent />
    </motion.div>
  );
}