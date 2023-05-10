import React, { useMemo } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Card = ({ url, id, like, handleLike, handleDislike }) => {

    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: url }} alt={url} />
            <View style={styles.actionContainer}>
                <View style={styles.chip}>
                    <Text>{like} Likes</Text>
                </View>
                <View style={[styles.actionContainer, { marginLeft: 'auto' }]}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#0384D8' }]} onPress={() => handleLike(id)} >
                        <Text style={{ color: 'white' }}>Like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#D82A03' }]} onPress={() => handleDislike(id)} >
                        <Text style={{ color: 'white' }}>Dislike</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#eee',
        padding: 10,
    },
    actionContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 3
    },
    chip: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#ababab'
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        marginBottom: 10
    }
})

export default Card