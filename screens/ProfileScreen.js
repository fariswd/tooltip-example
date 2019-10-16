import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Tooltip from 'react-native-walkthrough-tooltip'

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const tooltip = navigation.getParam('tooltip')
    return {
      title: 'Profile Screen',
      headerRight: (
        <Tooltip
          // my solution adding some adjustment here:
          // ****
          // backgroundStyle={{ marginTop: !isAndroid ? 0 : -Constants.statusBarHeight }}
          // topAdjustment={isAndroid ? -Constants.statusBarHeight : 0}
          // ****
          arrowStyle={{ marginLeft: 5 }}
          contentStyle={{ marginLeft: 10 }}
          isVisible={tooltip}
          content={<Text>Awesome Stuff</Text>}
          placement="bottom"
          onClose={() => navigation.setParams({ tooltip: false })}
        >
          <TouchableOpacity
            onPress={() => navigation.setParams({ tooltip: false })}
            style={{
              backgroundColor: 'white',
              width: 35,
              height: 35,
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 8,
            }}
          >
            <FontAwesome name="info-circle" size={25} color="green" />
          </TouchableOpacity>
        </Tooltip>
      ),
    }
  }
  componentDidMount(){
    this.props.navigation.setParams({
      tooltip: true,
    });
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>This is ProfileScreen</Text>
      </View>
    )
  }
}