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
        [theme.breakpoints.down('xs')]: {
            fontSize: '3rem'
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
    }
});

interface Props extends WithStyles<typeof styles> {
}

const slides = [
    {
        id: 0,
        background: development,
        text: 'Developing',
        icon: <DevelopIcon />,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        id: 1,
        background: administration,
        text: 'Administration',
        icon: <AdminstrationIcon />,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 2,
        background: support,
        text: 'Consultation',
        icon: <SupportIcon />,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 3,
        background: guarantee,
        text: 'Guarantee',
        icon: <DoneIcon />,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
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
                                            {item.text}
                                        </Typography>
                                    </Slide>
                                    <Slide direction={'left'} in={slide.id === index} timeout={1000}>
                                        <Typography variant={"body2"} color={"inherit"} >
                                            {item.description}
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
                                label={item.text}
                                className={classes.action}
                                classes={{
                                    selected: classes.selected
                                }}
                                icon={item.icon} />
                        )
                    })}
                </BottomNavigation>
            </div>
        </div>
    )
};

export default withStyles(styles)(Intro)