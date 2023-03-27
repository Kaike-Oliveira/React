import {render, screen} from "@testing-library/react";

import {Posts} from "./index";

import {postPropsMock} from "./mock";

const props = postPropsMock;


describe('<Posts />', () => {
    it('should render posts', function () {
        render(<Posts {...props} />);

        expect(screen.getAllByRole('heading', {name: /title/i})).toHaveLength(3);
        expect(screen.getAllByRole('img', {name: /title/i})).toHaveLength(3);
        expect(screen.getAllByText(/body/i)).toHaveLength(3);
        expect(screen.getByRole('img', {name: /title 3/i})).toHaveAttribute('src', 'img/img3.png')
    });

    it('should match snapshot', function () {
        const {container} = render(<Posts {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
})