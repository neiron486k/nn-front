import React, { useEffect } from 'react';
import Section from "./section/Section";
import Intro from "./section/intro/Intro";
import Work from "./section/work/Work";
import Contact from "./section/contact/Contact";
import { scroller } from 'react-scroll';
import { AppState } from "../../app/reducer";
import { connect } from "react-redux";
import { createStyles, WithStyles } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { setLandingSection } from "./landingOparation";

const styles = createStyles({
    root: {}
});

interface IProps extends WithStyles<typeof styles> {
    section: string
    location: Location,
    setSection: Function
}

const Landing = ({ classes, section, location, setSection }: IProps) => {
    useEffect(() => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            ignoreCancelEvents: true
        });
    }, [section]);

    return (
        <div className={classes.root}>
            <Section id={"intro"}>
                <Intro />
            </Section>
            <Section id={"work"}>
                <Work />
            </Section>
        </div>
    )
};

const mapStateToProps = (state: AppState) => ({
    section: state.landing.section
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
    setSection: (section: string) => dispatch(setLandingSection(section))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter<any>(Landing)))