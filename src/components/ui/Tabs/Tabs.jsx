import { TabItem, TabsContainer } from "./Tabs.styles";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <TabsContainer>
      <TabItem
        active={activeTab === "practice"}
        onClick={() => setActiveTab("practice")}
      >
        Practice Sets
      </TabItem>

      <TabItem
        active={activeTab === "mock"}
        onClick={() => setActiveTab("mock")}
      >
        Mock Tests
      </TabItem>
    </TabsContainer>
  );
};

export default Tabs;
