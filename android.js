const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    droidSafeArea: {
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
});

