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

const styles = createStyles({
    root: {}
});

interface IProps extends WithStyles<typeof styles>{
    section: string
}

const Landing = ({classes, section}: IProps) => {
    useEffect(() => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }, [section]);

    return (
        <div className={classes.root}>
            <Section id={"intro"}>
                <Intro />
            </Section>
            <Section id={"work"}>
                <Work />
            </Section>
            <Section id={"contact"}>
                <Contact />
            </Section>
        </div>
    )
};

const mapStateToProps = (state: AppState) => ({
    section: state.landing.section
});

export default connect(mapStateToProps)(withStyles(styles)(Landing))