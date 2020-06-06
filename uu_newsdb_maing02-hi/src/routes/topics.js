//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import TopicList from "../bricks/topic-list";
import TopicProvider from "../bricks/topic-provider";
import TopicCreate from "../bricks/topic-create";
//@@viewOff:imports

const Topics = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Topics",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return (
      <UU5.Bricks.Div>
        <TopicProvider>
          {({ viewState, topics, handleCreate, handleDelete }) => {
            return (
              <>
                <TopicCreate onCreate={handleCreate} />
                <TopicList topics={topics} onDelete={handleDelete} />
              </>
            );
          }}
        </TopicProvider>
      </UU5.Bricks.Div>
    );
    //@@viewOff:render
  }
});

export default Topics;