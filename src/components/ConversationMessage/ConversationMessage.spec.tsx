import '../../setupTests';
import ConversationMessage from "./ConversationMessage"
import Enzyme from "enzyme";

const { shallow } = Enzyme; 
describe('ConversationMessage', () => {
    it('should call handleMessageSend', () => {
        const handleMessageSendMock = jest.fn();
        const wrapper = shallow(<ConversationMessage handleMessageSend={handleMessageSendMock} />);
        wrapper.find('input').simulate('change', {target: {value: 'Write new message'}});
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('keydown', { key: 'Enter' });
        expect(handleMessageSendMock).toBeCalled();
    })
  })


  
  