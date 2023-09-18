import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { Linking } from 'react-native';

const QuestionsScreen = ({ route }) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const fetchQuestions = async () => {
        if (loading) return;
        setLoading(true);

        try {
            const response = await axios.get(
                `https://api.stackexchange.com/2.3/questions?page=${page}&pagesize=10&order=desc&sort=activity&tagged=${route.params.tag}&site=stackoverflow`
            );
            setQuestions((prevQuestions) => [...prevQuestions, ...response.data.items]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, [route.params.tag, page]);

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
        fetchQuestions();
    };

    const renderFooter = () => {
        return loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
        ) : null;
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => openQuestionInBrowser(item.link)}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.score}>Score: {item.score}</Text>
            </View>
        </TouchableOpacity>
    );

    const openQuestionInBrowser = (url) => {
        Linking.openURL(url).catch((err) =>
            console.error('Error occurred while opening URL: ', err)
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={questions}
                keyExtractor={(item) => item.question_id.toString()}
                renderItem={renderItem}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    item: {

        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333333',
    },
    score: {
        fontSize: 14,
        color: '#777777',
    },
});

export default QuestionsScreen;
