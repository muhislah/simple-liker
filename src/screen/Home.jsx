import React, { useEffect, useMemo, useState } from 'react'
import jsonData from '../assets/data.json'
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Pressable, TouchableHighlight, TouchableOpacity } from 'react-native'
import Card from '../components/module/Card'

const Home = () => {
    const [data, setData] = useState(jsonData)

    const handleLike = (id) => {
        setData(prev => {
            let newData = prev.map((data) => {
                if (data.id === id) {
                    return {
                        ...data,
                        like: data.like + 1
                    }
                } else {
                    return data
                }
            })

            return newData
        })
    }

    const handleDislike = (id) => {
        setData(prev => {
            let newData = prev.map((data) => {
                if (data.id === id) {
                    return {
                        ...data,
                        like: data.like - 1
                    }
                } else {
                    return data
                }
            })

            return newData
        })
    }

    const handleReset = () => {
        const newData = data.map((data) => {
            return {
                ...data,
                like: 0
            }
        })
        setData(newData)
    }

    const handleLikeAll = () => {
        const newData = data.map((data) => {
            return {
                ...data,
                like: data.like + 1
            }
        })
        setData(newData)
    }

    const handleDislikeAll = () => {
        const newData = data.map((data) => {
            return {
                ...data,
                like: data.like - 1
            }
        })
        setData(newData)
    }
    
    const renderCard = useMemo(() => {
        if (data && data.length) {
            return (
                data.map((data) => {
                    return (
                        <Card
                            key={data.id}
                            url={data.url}
                            id={data.id}
                            handleLike={handleLike}
                            handleDislike={handleDislike}
                            like={data.like}
                        />
                    )
                })
            )
        } else {
            return null
        }
    }, [data])


    useEffect(() => {
        console.log('data changes')
    }, [data])

    return (
        <SafeAreaView>
            <ScrollView >
                <View style={styles.container}>
                    <View style={styles.actionContainer}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#0384D8' }]} onPress={handleLikeAll} >
                            <Text style={{ color: 'white' }}>Like All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: 'white', borderWidth: 1, borderColor: '#ababab' }]} onPress={handleReset} >
                            <Text style={{ color: '#ababab' }}>Reset All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#D82A03' }]} onPress={handleDislikeAll} >
                            <Text style={{ color: 'white' }}>Dislike All</Text>
                        </TouchableOpacity>
                    </View>
                    {renderCard}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 10,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 3,
        flex: 1,
        textAlign: 'center',
        alignItems: 'center'
    },
    actionContainer: {
        flexDirection: 'row',
        gap: 10
    }
})

export default Home