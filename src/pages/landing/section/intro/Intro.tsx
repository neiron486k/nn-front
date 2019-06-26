import React, { useState } from 'react'
import Slide from '@material-ui/core/Slide';
import { Theme } from "@material-ui/core";
import { withStyles, WithStyles, createStyles } from '@material-ui/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import Particles from 'react-particles-js';
import slides from './slides';
import particles from './particles'
import FormatMessage from "../../../../locale/FormatMessage";

const styles = (theme: Theme) => createStyles({
    slider: {
        height: '100%',
        position: 'relative',
    },
    slide: {
        transition: 'opacity 1s',
        opacity: 0,
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    containerWrapper: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
    },
    text: {
        textTransform: 'uppercase',
        [theme.breakpoints.down('md')]: {
            fontSize: '3.5rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem'
        },
    },
    title: {
        textTransform: 'uppercase',
    },
    description: {},
    footer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        zIndex: theme.zIndex.appBar
    },
    nav: {
        background: 'none'
    },
    action: {
        color: 'rgba(255, 255, 255, .7)',
        fontSize: '1rem'
    },
    selected: {
        color: '#fff !important',
        fontSize: '1rem !important'
    },
    particles: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: theme.zIndex.appBar - 1
    }
});

interface Props extends WithStyles<typeof styles> {
    width: Breakpoint
}

const Intro = ({ classes, width }: Props) => {
    const [slide, setSlide] = useState(slides[0]);
    const handleSlide = (index: number) => {
        setSlide(slides[index]);
    };

    return (
        <div className={classes.slider}>
            <Particles
                className={classes.particles}
                params={particles}
            />
            {
                slides.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={classes.slide}
                            style={{
                                opacity: slide.id === index ? 1 : 0,
                                background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.4)), url(${item.background}) center / cover no-repeat`
                            }}
                        >
                            <div className={classes.containerWrapper}>
                                <Container fixed>
                                    <Slide direction={'up'} in={slide.id === index} timeout={1000}>
                                        <Typography variant={"body2"} color={"inherit"} className={classes.title} align={"right"} paragraph>
                                            <FormatMessage id={item.title} />
                                        </Typography>
                                    </Slide>
                                    <Slide direction={'left'} in={slide.id === index} timeout={1000}>
                                        <Typography variant={"h1"} color={"inherit"} className={classes.text} paragraph>
                                            <FormatMessage id={item.header} />
                                        </Typography>
                                    </Slide>
                                    <Slide direction={'down'} in={slide.id === index} timeout={1000}>
                                        <Typography variant={"body1"} color={"inherit"}>
                                            <FormatMessage id={item.description} />
                                        </Typography>
                                    </Slide>
                                </Container>
                            </div>
                        </div>
                    )
                })
            }
            <div className={classes.footer}>
                <BottomNavigation
                    value={slide.id}
                    onChange={(event, newValue) => {
                        handleSlide(newValue);
                    }}
                    showLabels
                    className={classes.nav}
                >
                    {slides.map((item, index) => {
                        return (
                            <BottomNavigationAction
                                key={index}
                                label={!isWidthDown('xs', width) && <FormatMessage id={item.label} />}
                                className={classes.action}
                                classes={{
                                    selected: classes.selected,
                                    label: classes.action,
                                }}
                                icon={<item.icon />}
                            />
                        )
                    })}
                </BottomNavigation>
            </div>
        </div>
    )
};

export default withWidth()(withStyles(styles)(Intro))