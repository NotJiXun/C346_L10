import {StyleSheet, Text, View, TouchableOpacity, SectionList, Alert, Button, Image} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

// need icon, color, title, datasource (should include the number pattern in the link)
const datasource = [
    {
        title: "ELECTRIC",
        icon: "lightning-bolt",
        color: "yellow",
        data: [
            {id: '1',name: "Pikachu", card: 25},
            {id: '2',name: "Voltorb", card: 100},
        ],
    },
    {
        title: "FIRE",
        icon: "fire",
        color: "orange",
        data: [
            {id: '3',name: "Charmander", card: 4},
            {id: '4',name: "Growlithe", card: 58},
        ],
    },
];

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonName}>
                <Button
                    title={"Add Pokemon"}
                    onPress={() => Alert.alert("We will learn this next lesson")}
                />
            </View>

            <SectionList
                sections={datasource}
                renderSectionHeader={({section}) => (
                    <View style={[styles.header, {backgroundColor: section.color}]}>
                        <MaterialCommunityIcons
                            name={section.icon}
                            size={24}
                            color="black"
                        />
                        <Text style={styles.headerText}>{section.title}</Text>
                    </View>
                )}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => Alert.alert(item.name)}
                    >
                        <Text style={styles.name}>{item.name}</Text>
                        <Image
                            style={styles.image}
                            source={{
                                    uri: `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.card}-2x.png`,
                            }}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    buttonName: {
        margin: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        marginLeft: 5, // space away from icon
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "lavender",
    },
    name: {
        fontSize: 20,
    },
    image: {
        width: 200,
        height: 250,
    },
});
