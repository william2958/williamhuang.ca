import axios from "../../utils/axios";
import {toast} from "react-toastify";
import {H4, H6} from "../../styles/typography/Headers";
import React from "react";
import {
	MonthlyFivesPageHeader,
	MonthlyFivesPageWrapper,
	MonthlyFiveSpotlightPlaceholder,
	MostRecentMonthlyFiveWrapper
} from "./styles";
import MonthlyFivePreview from "./MonthlyFivePreview";
import {VALID_YEARS} from "../../constants";
import Dropdown from "../../components/Dropdown";
import {GutteredRow} from "../../styles/globalStyles";
import MonthlyFiveHero from "./MonthlyFiveHero";

class MonthlyFivesPage extends React.Component {

	state = {
		monthlyFives: [],
		mostRecentMonthlyFive: null,
		filterCategory: 'all',
		selectedYear: VALID_YEARS[0]
	};

	componentDidMount() {
		this.getYear(this.state.selectedYear);
		window.scrollTo(0, 0);
	}

	getYear = async (year) => {
		try {

			const response = (await axios.get(`/monthlyFive/getRecentMonthlyFives?year=${year}`)).data;

			let mostRecentMonthlyFive = null;
			let monthlyFives = response.allMonthlyFives;
			if (response.allMonthlyFives.length) {
				mostRecentMonthlyFive = monthlyFives.shift();
			}

			this.setState({
				monthlyFives,
				mostRecentMonthlyFive
			})

		} catch (error) {
			toast.error('There was an error getting the first page.')
		}
	};

	selectYear = (year) => {
		this.getYear(year);
	};

	render() {

		const {
			monthlyFives,
			mostRecentMonthlyFive,
			selectedYear
		} = this.state;

		return (
			<MonthlyFivesPageWrapper className="container">

				{mostRecentMonthlyFive ? (
					<MostRecentMonthlyFiveWrapper>
						<MonthlyFiveHero monthlyFive={mostRecentMonthlyFive} fit />
					</MostRecentMonthlyFiveWrapper>
				) : (
					<>
						<H4> </H4>
						<MonthlyFiveSpotlightPlaceholder />
					</>
				)}

				<MonthlyFivesPageHeader className="row">
					<div className="headerDescription">
						<H4>The Monthly Five</H4>
						<H6 color="secondary">No structure, no template. Just five things, every month. Enjoy :)</H6>
					</div>
					<div className="headerDropdown">
						<Dropdown value={selectedYear} options={VALID_YEARS} onChange={this.selectYear} />
					</div>
				</MonthlyFivesPageHeader>
				<GutteredRow className="row no-gutters">
					{
						monthlyFives.map(monthlyFive => (
							<MonthlyFivePreview monthlyFive={monthlyFive} key={monthlyFive._id} />
						))
					}
				</GutteredRow>
			</MonthlyFivesPageWrapper>
		)
	}

}

export default MonthlyFivesPage;
