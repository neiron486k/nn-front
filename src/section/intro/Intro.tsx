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
        alignItems: 'center'
    },
    typography: {
        color: '#fff',
        // mixBlendMode: 'color-dodge'
    },
    footer: {
        position: 'absolute',
        width: '100%',
        bottom: 0
    },
    nav: {
        background: 'none'
    },
    action: {
        color: 'rgba(255, 255, 255, .3)'
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
        background: 'https://avatars.mds.yandex.net/get-pdb/49816/2102e48b-64b8-4efa-b8ad-f551299c13ab/s1200',
        text: 'Developing',
        icon: <DevelopIcon />,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        id: 1,
        background: 'https://avatars.mds.yandex.net/get-pdb/38069/850196c4-39e4-4548-bc9b-43a564458809/s1200',
        text: 'Administration',
        icon: <AdminstrationIcon />,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 2,
        background: 'https://avatars.mds.yandex.net/get-pdb/236760/0df63c66-6cd8-4310-927c-8b40120d8d1f/s1200',
        text: 'Consultation',
        icon: <SupportIcon />,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 3,
        background: 'https://avatars.mds.yandex.net/get-pdb/236760/0df63c66-6cd8-4310-927c-8b40120d8d1f/s1200',
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
                                background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url(${item.background}) center / cover no-repeat`
                                // background: `url(${item.background}) center / cover no-repeat`
                            }}
                        >
                            <div className={classes.containerWrapper}>
                                <Container fixed>
                                    <Slide direction={'up'} in={slide.id === index} timeout={1000}>
                                        <Typography variant={"h2"} className={classes.typography} gutterBottom>
                                            {item.text}
                                        </Typography>
                                    </Slide>
                                    <Slide direction={'left'} in={slide.id === index} timeout={1000}>
                                        <Typography variant={"body1"} className={classes.typography}>
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