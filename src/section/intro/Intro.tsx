import React, { useState } from 'react'
import Slide from '@material-ui/core/Slide';
import { createStyles, Theme } from "@material-ui/core";
import { withStyles, WithStyles } from '@material-ui/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DoneIcon from '@material-ui/icons/Done';
import DevelopIcon from '@material-ui/icons/DeveloperBoard';
import AdminstrationIcon from '@material-ui/icons/Computer';
import SupportIcon from '@material-ui/icons/ContactSupport';
import development from './images/development.jpeg';
import guarantee from './images/guarantee.jpeg';
import administration from './images/administration.jpeg';
import support from './images/support.jpeg';
import LangMenu from "../../locale/LangMenu";
import FormatMessage from "../../locale/FormatMessage";

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
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem'
        }
    },
    description: {},
    footer: {
        position: 'absolute',
        width: '100%',
        bottom: 0
    },
    nav: {
        background: 'none'
    },
    action: {
        color: 'rgba(255, 255, 255, .7)'
    },
    selected: {
        color: '#fff !important'
    },
    lang: {
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        position: 'absolute',
        right: 0,
        top: theme.spacing(2),
        zIndex: theme.zIndex.appBar + 1
    }
});

interface Props extends WithStyles<typeof styles> {
}

const slides = [
    {
        id: 0,
        background: development,
        label: 'slider.development.label',
        header: 'slider.development.header',
        description: 'slider.development.description',
        icon: <DevelopIcon />,
    },
    {
        id: 1,
        background: administration,
        label: 'slider.administration.label',
        header: 'slider.administration.header',
        description: 'slider.administration.description',
        icon: <AdminstrationIcon />,
    },
    {
        id: 2,
        background: support,
        label: 'slider.consultation.label',
        header: 'slider.consultation.header',
        description: 'slider.consultation.description',
        icon: <SupportIcon />,
    },
    {
        id: 3,
        background: guarantee,
        label: 'slider.guarantee.label',
        header: 'slider.guarantee.header',
        description: 'slider.guarantee.description',
        icon: <DoneIcon />,
    },
];

const Intro = ({ classes }: Props) => {
    const [slide, setSlide] = useState(slides[0]);
    const handleSlide = (index: number) => {
        setSlide(slides[index]);
    };

    return (
        <div className={classes.slider}>
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
                                        <Typography variant={"h2"} color={"inherit"} className={classes.text} gutterBottom>
                                            <FormatMessage id={item.header} />
                                        </Typography>
                                    </Slide>
                                    <Slide direction={'left'} in={slide.id === index} timeout={1000}>
                                        <Typography variant={"body2"} color={"inherit"} >
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
                    showLabels={true}
                    className={classes.nav}
                >
                    {slides.map((item, index) => {
                        return (
                            <BottomNavigationAction
                                key={index}
                                label={<FormatMessage id={item.label} />}
                                className={classes.action}
                                classes={{
                                    selected: classes.selected
                                }}
                                icon={item.icon} />
                        )
                    })}
                </BottomNavigation>
            </div>
            <LangMenu className={classes.lang} />
        </div>
    )
};

export default withStyles(styles)(Intro)