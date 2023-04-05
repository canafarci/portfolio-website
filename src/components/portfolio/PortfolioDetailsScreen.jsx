export default function PortfolioDetailsScreen({ route }) {
  const { selectedItem } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedItem.title}</Text>
      <Image
        source={{ uri: selectedItem.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.description}>{selectedItem.description}</Text>
    </View>
  );
}
