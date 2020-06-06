//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const initialTopics = [
  {
    id: 1,
    name: "Politics",
    text: "This is my topic 1...",

  },
  {
    id: 2,
    name: "Health",
    text: "This is my topic 2...",

  }
];

const TopicProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "TopicProvider",
  //@@viewOff:statics

  render({ children }) {
    //@viewOn:hooks
    const [topics, setTopics] = useState(initialTopics);
    //@viewOff:hooks

    //@@viewOn:private
    function handleCreate(topic) {
      topic.id = UU5.Common.Tools.generateUUID();
      topic.averageRating = Math.round(Math.random() * 5); // <0, 5>

      let newTopics = topics.concat();
      newTopics.push(topic);
      setTopics(newTopics);
    }

    function handleDelete(topic) {
      let newTopics = topics.filter(item => item.id !== topic.id);
      setTopics(newTopics);
    }
    //@@viewOff:private

    //@@viewOn:render
    return children({ topics, handleCreate, handleDelete });
    //@@viewOff:render
  }
});

export default TopicProvider;