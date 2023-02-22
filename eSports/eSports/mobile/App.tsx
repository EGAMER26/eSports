import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
          {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        {/* Hello world */}
        </Text>

      <Button title="Hello World"/>
      <Button title="Send 1"/>
      <Button title="Send 2"/>
      
      <StatusBar style="auto" backgroundColor='purple'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const stylesButtons = StyleSheet.create({
  container: {
    width: '10px',
    backgroundColor: 'black',
  }
});
