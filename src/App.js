import React, { useState } from "react";
import {
  Tabs,
  TabList,
  Tab,
  PanelList,
  Panel,
  ExtraButton
} from "react-tabtab";
import { FaPlus } from "react-icons/fa";
import { makeData } from "./utils";

const App = props => {
  const [tabs, setTabs] = useState(makeData(3));
  const [activeIndex, setActiveIndex] = useState(0);
  //const { tabs, activeIndex } = this.state;
  const tabTemplate = [];
  const panelTemplate = [];

  const handleExtraButton = () => {
    //const { tabs } = this.state;
    const newTabs = [...tabs, { title: "New Tab", content: "New Content" }];
    setActiveIndex(newTabs.length - 1);
    setTabs(newTabs);
  };

  const handleTabChange = index => {
    //this.setState({ activeIndex: index });
    setActiveIndex(index);
  };

  const handleEdit = ({ type, index }) => {
    if (type === "delete") {
      //tabs = [...tabs.slice(0, index), ...tabs.slice(index + 1)];
      setTabs(tabs => [...tabs.slice(0, index), ...tabs.slice(index + 1)]);
      console.log(tabs);
    }
    if (index - 1 >= 0) {
      //activeIndex = index - 1;
      setActiveIndex(index - 1);
    } else {
      //activeIndex = 0;
      setActiveIndex(0);
    }
    //return {tabs, activeIndex};
  };

  tabs.forEach((tab, i) => {
    const closable = tabs.length > 1;
    tabTemplate.push(
      <Tab key={i} closable={closable}>
        {tab.title}
      </Tab>
    );
    panelTemplate.push(<Panel key={i}>{tab.content}</Panel>);
  });

  console.log(tabs);

  return (
    <div>
      <Tabs
        onTabEdit={handleEdit}
        onTabChange={handleTabChange}
        activeIndex={activeIndex}
        customStyle={props.customStyle}
        ExtraButton={
          <ExtraButton onClick={handleExtraButton}>
            <FaPlus />
          </ExtraButton>
        }
      >
        <TabList>{tabTemplate}</TabList>
        <PanelList>{panelTemplate}</PanelList>
      </Tabs>
    </div>
  );
};

export default App;
