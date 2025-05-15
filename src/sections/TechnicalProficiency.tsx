import { useState } from "react";
import { SKILL_TABS, SKILLS } from "../utils/data";
import Tabs from "../components/Tabs";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

function TechnicalProficiency() {
    const [tabData, setTabData] = useState(SKILLS);
    const [activeTab, setActiveTab] = useState("all");

    const handleTabValueChange = (value: string) => {
        if (value === "all") {
            setTabData(SKILLS);
            setActiveTab("all");
            return;
        }

        const filteredData = SKILLS.filter((skill) => skill.type === value);
        setTabData(filteredData);
        setActiveTab(value);
    };

    return (
        <section id="skills" className="bg-background mt-20">
            <div className="container mx-auto p-10">
                <div className="w-full lg:w-[60vw] mx-auto">
                    <h4 className="section-title">Technical Proficiency</h4>

                    <p className="text-sm text-center mt-4 leading-6">
                        I'm a skilled and experienced web developer with a
                        strong background in web technologies. I have a proven
                        track record of delivering high-quality projects on time
                        and within budget.
                    </p>
                </div>

                <Tabs
                    tabList={SKILL_TABS}
                    activeTab={activeTab}
                    onChange={handleTabValueChange}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]">
                    {tabData.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <SkillCard
                                icon={
                                    <skill.icon className="w-6 h-6 text-primary" />
                                }
                                skillName={skill.skill}
                                description={skill.description}
                                progress={skill.progress}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechnicalProficiency;
