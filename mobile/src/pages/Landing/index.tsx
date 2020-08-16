import React from 'react';
import { View, Image, Text, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import styles from './styles';

import LandingImage from '../../assets/images/landing.png';
import StudyIcon from '../../assets/images/icons/study.png';
import GiveClassesIcon from '../../assets/images/icons/give-classes.png';
import HeartIcon from '../../assets/images/icons/heart.png';

function Landing() {

    const { navigate } = useNavigation();

    function handleNavgationToGiveClassesPage() {
        navigate('GiveClasses');
    }

    function handleNavigationToStudyPage() {
        navigate('Study')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={LandingImage} />

            <Text style={styles.title} >
                Seja bem vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                    onPress={handleNavigationToStudyPage}
                    style={[styles.button, styles.buttonPrimary]}>
                    <Image source={StudyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton 
                    onPress={handleNavgationToGiveClassesPage} 
                    style={[styles.button, styles.buttonSecondary]}>
                    <Image source={GiveClassesIcon} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de 0 conexões já realizadas {' '}
                <Image source={HeartIcon} />
            </Text>
        </View>
    )
}

export default Landing;