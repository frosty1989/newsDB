//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const Topic = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Topic",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    topic: UU5.PropTypes.shape({
      name: UU5.PropTypes.string.isRequired,
      text: UU5.PropTypes.string.isRequired,
    }),
    colorSchema: UU5.PropTypes.string,
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    topic: null,
    colorSchema: "blue"
  },
  //@@viewOff:defaultProps

  render({ topic, colorSchema, onDelete }) {
    //@@viewOn:private
    function handleDelete() {
      typeof onDelete === "function" && onDelete(topic);
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderHeader() {
      return (
        <UU5.Common.Fragment>
          {topic.name}
          <UU5.Bricks.Button onClick={handleDelete} colorSchema="red">
            <UU5.Bricks.Icon icon="mdi-delete" />
          </UU5.Bricks.Button>
        </UU5.Common.Fragment>
      );
    }

    if (!topic) {
      return null;
    }

    return (
      <UU5.Bricks.Card header={renderHeader()} colorSchema={colorSchema}>
        <div>{topic.name}</div>
      </UU5.Bricks.Card>
    );
    //@@viewOff:render
  }
});

export default Topic;