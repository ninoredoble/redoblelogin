import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    section: {
        width: '100%',
    },
    logoBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginBottom: 10,
        marginHorizontal: 12,
        fontSize: 15,
        paddingVertical: 5,
    },
    button: {
        marginBottom: 10,
        marginHorizontal: 12,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 15,
        color: 'white',
    },
    forgotButton: {
        borderColor: '#0056B3', 
        marginTop: 10,
        marginHorizontal: 12,
        paddingVertical: 10,
        color: '#0056B3',
    },
    centeredText: {
        fontSize: 16,
        color: '#2b3244',
        textAlign: 'center',
    },
});

export default styles;
