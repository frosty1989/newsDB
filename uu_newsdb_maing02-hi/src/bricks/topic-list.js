//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Topic from "./topic";
//@@viewOff:imports

const TopicList = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "TopicList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    Topics: UU5.PropTypes.array.isRequired,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    Topics: [],
    onDetail: null,
    onUpdate: null,
    onDelete: null
  },
  //@@viewOff:defaultProps

  render({ topics, onDetail, onUpdate, onDelete }) {
    //@@viewOn:render
    if (topics.length === 0) {
      return <UU5.Common.Error content="No topics!" />;
    }

    return (
      <UU5.Bricks.Div>
        {topics.map(topic => (
          <Topic key={topic.id} topic={topic} colorSchema="green" onDetail={onDetail} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
        <Topic />
      </UU5.Bricks.Div>
    );
    //@@viewOff:render
  }
});

export default TopicList;