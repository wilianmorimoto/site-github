import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, GithubLogo, SearchForm } from "./styles";

import { ThemeName } from "../../styles/Themes";

interface Props {
	themeName: ThemeName;
	setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({themeName, setThemeName}) => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();

		navigate(`/${search.toLowerCase().trim()}`);
	}

	function toggleTheme() {
		setThemeName(themeName === "light" ? "dark" : "light");
	}

	return (
		<Container>
			<GithubLogo onClick={toggleTheme} />
			<SearchForm onSubmit={handleSubmit}>
				<input
					value={search}
					onChange={e => setSearch(e.target.value)}
					placeholder="Enter Username or Repo..."
				/>
			</SearchForm>
		</Container>
	);
};

export default Header;
