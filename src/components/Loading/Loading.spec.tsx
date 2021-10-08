import { render, screen } from "@testing-library/react"
import Loading from "./Loading"

describe('Loading', () => {
    it('should render correctly Loading...', () => {
        render(<Loading />)
      expect(
        screen.getByText(/Loading .../)
      ).toBeInTheDocument()
    })
  })
