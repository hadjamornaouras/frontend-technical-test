import Item from "./Item"
import '../../setupTests';
import Enzyme from "enzyme";

const { shallow } = Enzyme; 

const conversationMock ={
  id: 1,
  recipientId: 2,
  recipientNickname: "Jeremie",
  senderId: 1,
  senderNickname: "Thibaut",
  lastMessageTimestamp: 1625637849
}
describe('getLoggedUserId', () => {
    it('should render correctly ConversationHeader', () => {
      const handleDeleteConversationMock = jest.fn();
      const wrapper = shallow(<Item handleDeleteConversation={handleDeleteConversationMock} conversation={conversationMock} />);
      expect(wrapper.find('.font-semibold').text()).toEqual(conversationMock.recipientNickname);
    })

    it('should call delete Conversation', () => {
      const handleDeleteConversationMock = jest.fn();
      const wrapper = shallow(<Item handleDeleteConversation={handleDeleteConversationMock} conversation={conversationMock} />);
      wrapper.find('button').simulate('click');
      expect(handleDeleteConversationMock).toBeCalled();
  })
  })
