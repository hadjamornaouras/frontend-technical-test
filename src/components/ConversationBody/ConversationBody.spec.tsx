import ConversationBody from "./ConversationBody"
import '../../setupTests';
import Enzyme from "enzyme";

const { shallow } = Enzyme; 

const  messages =[
  {
    id: 1,
    conversationId: 1,
    timestamp: 1625637849,
    authorId: 1,
    body: "Bonjour c'est le premier message de la première conversation"
  },
  {
    id: 2,
    conversationId: 1,
    timestamp: 1625637867,
    authorId: 2,
    body: "Bonjour c'est le second message de la première conversation"
  },
  {
    id: 3,
    conversationId: 1,
    timestamp: 1625648667,
    authorId: 1,
    body: "Bonjour c'est le troisième message de la première conversation"
  }
]
const recipientNicknameMock = 'Jeremie'
describe('ConversationBody', () => {
    it('should render messages length', () => {
      const wrapper = shallow(<ConversationBody messages={messages} recipientNickname={recipientNicknameMock} />); 
      expect(wrapper.find('.chat-message').getElements().length).toEqual(messages.length)      
    })
  })
