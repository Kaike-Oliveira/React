import {render, screen} from "@testing-library/react";
import {PostCard} from "./index";
import {postCardPropsMock} from "./mock";

const props = postCardPropsMock;

describe('<PostCard />', () => {
    it('should render PostCard correctly', function () {
        render(<PostCard {...props} />);

        expect(screen.getByRole('img', {name: props.title})).toHaveAttribute('src', 'img/img.png');
        expect(screen.getByRole('heading', {name: 'title1'})).toBeInTheDocument();
        expect(screen.getByText('body 1')).toBeInTheDocument();
    });

    it('should match snapshot', function () {
        const {container} = render(<PostCard {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
})