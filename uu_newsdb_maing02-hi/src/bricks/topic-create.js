//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import TopicCreateForm from "./topic-create-form";
//@@viewOff:imports

const Mode = {
  button: "button",
  form: "form"
};

const TopicCreate = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "TopicCreate",
  //@@viewOff:statics

  render({ onCreate }) {
    //@viewOn:hooks
    const [mode, setMode] = useState(Mode.button);
    //@viewOff:hooks

    //@@viewOn:private
    function handleAddClick() {
      setMode(Mode.form);
    }

    function handleSave(opt) {
      typeof onCreate === "function" && onCreate(opt.values);
      setMode(Mode.button);
    }

    function handleCancel(topic) {
      setMode(Mode.button);
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderButton() {
      return <UU5.Bricks.Button onClick={handleAddClick} colorSchema="primary" content="Add topic" />;
    }

    function renderForm() {
      return <TopicCreateForm onSave={handleSave} onCancel={handleCancel} />;
    }

    switch (mode) {
      case Mode.button:
        return renderButton();
      default:
        return renderForm();
    }
    //@@viewOff:render
  }
});

export default TopicCreate;