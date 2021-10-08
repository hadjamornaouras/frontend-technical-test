import ConversationHeader from "./ConversationHeader"
import '../../setupTests';
import Enzyme from "enzyme";

const { shallow } = Enzyme; 

describe('ConversationHeader', () => {
    it('should render correctly recipient name', () => {
      const recipientNicknameMock = 'First user'
      const wrapper = shallow(<ConversationHeader recipientNickname={recipientNicknameMock} />); 
      const name =  wrapper.find('span').first().text();
      expect(name).toBe(recipientNicknameMock);
    })
  })
