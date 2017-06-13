import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events';

const rDay = '0,2'

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

const styles = {
  cell: {
    width: '100%',
    height: '100%',
    'textAlign': 'center',
  }
}
class BackgroundInner extends React.Component {
  render() {
    const { value } = this.props
    console.log(value)
    return (
      <div style={styles.cell}>
        <div>50,000円</div>
        <div>○</div>
      </div>
    )
  }
}

let Basic = React.createClass({
  render(){
    return (
      <BigCalendar
        {...this.props}
        events={events}
        views={allViews}
        defaultDate={new Date(2015, 3, 1)}
        components={{
          dateCellInner:BackgroundInner,
        }}
        dayPropGetter={(date, isToday) => {
          const day = (new Date(date)).getDay()
          if (rDay.indexOf(day) !== -1) {
            return { style: { backgroundColor: 'DarkGray' } }
          }
          return {}
        }}
      />
    )
  }
})

export default Basic;
