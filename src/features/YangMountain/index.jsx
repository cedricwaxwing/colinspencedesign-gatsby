import { useState } from 'react'
import Cell from '@components/Cell'
import Image from '@components/Image'
import ChestLocked from '../../../static/images/yang-mountain/chest--locked.png'
import ChestUnlocked from '../../../static/images/yang-mountain/chest--unlocked.png'
import YangFall from '../../../static/images/yang-mountain/YangAnimsForMountain_FALL.gif'
import YangIdle from '../../../static/images/yang-mountain/YangAnimsForMountain_IDLE.gif'
import YangRun from '../../../static/images/yang-mountain/YangAnimsForMountain_RUN.gif'
import Cloud1 from '../../../static/images/yang-mountain/cloud1.png'
import Cloud2 from '../../../static/images/yang-mountain/cloud2.png'
import Cloud3 from '../../../static/images/yang-mountain/cloud3.png'
import Cloud4 from '../../../static/images/yang-mountain/cloud4.png'
import Cloud5 from '../../../static/images/yang-mountain/cloud5.png'
import Cloud6 from '../../../static/images/yang-mountain/cloud6.png'
import YangMountainBg from '../../../static/images/yang-mountain/yang-mountain.svg'
import './yang-mountain.css'
import $ from 'jquery'
import VisibilitySensor from 'react-visibility-sensor'

export default props => {
  const [activated, setActivated] = useState(false)

  function onChange(isVisible) {
    if (isVisible && !activated) {
      activateProgressBar(4323019)
      setActivated(true)
    }
  }

  var activateProgressBar = function activateProgressBar(
    currentDonationAmount
  ) {
    var yang = $('.yang')
    var yangAnimoji = $('.yang-animoji')
    var yangProgress = $('.yang-progress')
    var GOALS = [500000, 1000000, 2000000, 3500000, 5000000, 10000000]
    var mountainHeightRatio = $('.mountains').height() / $('.canvas').height()
    var QUICK_DURATION = 1000
    var CURRENT_GOAL_DURATION = 3000
    var MOUNTAIN_WIDTH = 87
    var startX = (100 - MOUNTAIN_WIDTH) / 2
    var data = {
      climb: 0,
      points: [
        // animation points - percentage based coordinates
        [startX, 0], // 00 - starting point
        [startX + 8.1, 47], // 01 - peak 1 - GOAL 1
        [startX + 15, 12], // 02 - valley 1
        [startX + 23.9, 59.5], // 03 - peak 2 - GOAL 2
        [startX + 30, 23], // 04 - valley 2
        [startX + 34.75, 46], // 05 - peak 3 - GOAL 3
        [startX + 41, 14.75], // 06 - valley 3
        [startX + 50, 77], // 07 - peak 4 - GOAL 4
        [startX + 55.8, 33.5], // 08 - valley 5
        [startX + 62.8, 58], // 09 - peak 6 - GOAL 5
        [startX + 69, 31], // 10 - valley 6
        [startX + 78, 96], // 11 - peak 7 - GOAL 6
        [startX + 88, 0], // 12 - valley 7
      ],
    }
    var yangStates = {}
    yangStates.running = YangRun
    yangStates.sliding = YangFall
    yangStates.idle = YangIdle
    yangStates.current = yangStates.idle

    function getTarget() {
      // compare the current progress amount with each goal in order to determine what goal Yang is currently in the process of trying to achieve.
      GOALS.forEach(function(goal, index) {
        if (
          GOALS[index - 1] < currentDonationAmount &&
          currentDonationAmount < goal
        ) {
          data.climb = index
        }
      }) // $(".yang-progress").text(animateProgressText(0, currentDonationAmount, totalDuration));
      // animate Yang through each peak and valley up to the point where his current goal is at

      let i = 0
      for (i = 0; i <= data.climb * 2; i++) {
        var x = data.points[i][0]
        var y = data.points[i][1] * mountainHeightRatio
        var goal = GOALS[i / 2]
        animateYang({
          x: x,
          y: y,
          finalAmount:
            goal < currentDonationAmount ? goal : currentDonationAmount,
          duration: QUICK_DURATION,
        }) // once yang gets to the valley of the current goal starting point, animate his current progress of that goal (with a bit of a slower animation)

        var valleyIndex = data.climb * 2
        var mountainIndex = data.climb * 2 + 1

        if (i === valleyIndex || data.climb === 0) {
          var _x =
            (data.points[mountainIndex][0] - data.points[valleyIndex][0]) *
              calculateCurrentGoalProgress(currentDonationAmount) +
            data.points[valleyIndex][0]

          var _y =
            ((data.points[mountainIndex][1] - data.points[valleyIndex][1]) *
              calculateCurrentGoalProgress(currentDonationAmount) +
              data.points[valleyIndex][1]) *
            mountainHeightRatio

          animateYang({
            x: _x,
            y: _y,
            finalAmount: currentDonationAmount,
            duration: CURRENT_GOAL_DURATION,
            currentGoal: goal,
          })
        }
      }
    }

    var addCommas = function addCommas(number) {
      return number.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    }

    function placeGoals() {
      GOALS.forEach(function(goal, index) {
        var mountainIndex = index * 2 + 1
        $('.goal-flagText')
          .eq(index)
          .attr('data-goal', '$' + addCommas(goal))
        $('.goal')
          .eq(index)
          .css({
            opacity: 1,
            left: data.points[mountainIndex][0] + '%',
            bottom: data.points[mountainIndex][1] * mountainHeightRatio + '%',
          })
      })
    }

    function changeAnimoji(state) {
      yangAnimoji.attr('src', state)
    }

    var pathNum = 0
    var amount = 0

    function animateYang(_ref) {
      var x = _ref.x,
        y = _ref.y,
        finalAmount = _ref.finalAmount,
        duration = _ref.duration,
        currentGoal = _ref.currentGoal
      yang.animate(
        {
          left: x + '%',
          bottom: y + '%',
        },
        {
          duration: duration,
          start: function start() {
            if (pathNum % 2 !== 0 && finalAmount) {
              var STEP_TIME = 43
              var stepCount = duration / STEP_TIME
              var stepAmount = !!currentGoal
                ? (currentDonationAmount -
                    GOALS[Math.floor(pathNum / 2) - 1]) /
                  stepCount
                : GOALS[pathNum === 1 ? 0 : Math.floor(pathNum / 2) - 1] /
                  stepCount
              amount =
                currentGoal || pathNum === 1
                  ? amount
                  : GOALS[Math.floor(pathNum / 2) - 1]
              data.timer = setInterval(function() {
                amount += stepAmount
                yangProgress.text('$' + addCommas(amount))

                if (amount >= GOALS[Math.floor(pathNum / 2)]) {
                  yangProgress.text('$' + addCommas(finalAmount))
                  clearInterval(data.timer)
                }
              }, STEP_TIME)
            }
          },
          complete: function complete() {
            clearInterval(data.timer)

            if (!!!currentGoal) {
              if (pathNum % 2 === 0) {
                // Animate yang up the mountain
                changeAnimoji(yangStates.running) // Reveal the goal behind the climb's cloud

                $('.goal')
                  .eq(pathNum / 2)
                  .addClass('is-revealed') // If yang has surpassed this goal, animate the flag to show that it's been accomplished already.

                if (data.climb !== pathNum / 2) {
                  var flagNum = pathNum / 2
                  setTimeout(function() {
                    $('.goal')
                      .eq(flagNum)
                      .addClass('is-accomplished')
                  }, 500)
                }
              } else {
                // Change the yang gif to the sliding down animation
                yangProgress.text(
                  '$' + addCommas(GOALS[Math.floor(pathNum / 2)])
                )
                changeAnimoji(yangStates.sliding)

                if (pathNum >= data.climb * 2 - 1) {
                  var line1 = progressBar.prizeUnlockedLine1
                  var line2 = progressBar.prizeUnlockedLine2
                  $('.prize')
                    .html(line1 + '<br />' + line2)
                    .addClass('is-revealed')
                }
              }
            } else {
              // Apply the following changes at the end of the full animation sequence
              changeAnimoji(yangStates.idle)
              yangProgress.text('$' + addCommas(currentDonationAmount))
            }

            pathNum += 1
          },
        }
      )
    }

    function calculateCurrentGoalProgress(amount) {
      var currentGoal = GOALS[data.climb]
      var lastGoal = data.climb >= 1 ? GOALS[data.climb - 1] : 0
      var currentProgress = (amount - lastGoal) / (currentGoal - lastGoal)
      return currentProgress
    }

    placeGoals()
    getTarget()
  }

  var progressBar = {
    prizeUnlockedLine1: 'Prize Unlocked!',
    prizeUnlockedLine2: '30% off All Merch for the Next 24 Hours!',
  }

  return (
    <Cell id="yang-mountain">
      <div className="heading-q3">
        <h2>Donate to Help Andrew Yang Reach His Q3 Fundraising Goals!</h2>
        <h3 className="prize">
          When we raise $3,500,000,
          <br />a new prize will be unlocked!
        </h3>
      </div>
      <VisibilitySensor partialVisibility onChange={onChange}>
        <div className="canvas" id="yang-mountain">
          <img
            className="mountains"
            height="389"
            src={YangMountainBg}
            width="1193"
          />
          <div className="yang">
            <div className="yang-progress">$0</div>
            <img className="yang-animoji" src={YangIdle} />
          </div>
          <div className="goal">
            <div
              className="goal-cloud"
              style={{ backgroundImage: `url(${Cloud1})` }}
            ></div>
            <div
              className="goal-chest"
              style={{ backgroundImage: `url(${ChestUnlocked})` }}
            ></div>
            <div className="goal-flag">
              <div className="goal-flagText"></div>
              <div className="goal-post"></div>
            </div>
          </div>
          <div className="goal">
            <div
              className="goal-cloud"
              style={{ backgroundImage: `url(${Cloud2})` }}
            ></div>
            <div
              className="goal-chest"
              style={{ backgroundImage: `url(${ChestUnlocked})` }}
            ></div>
            <div className="goal-flag">
              <div className="goal-flagText"></div>
              <div className="goal-post"></div>
            </div>
          </div>
          <div className="goal">
            <div
              className="goal-cloud"
              style={{ backgroundImage: `url(${Cloud3})` }}
            ></div>
            <div
              className="goal-chest"
              style={{ backgroundImage: `url(${ChestUnlocked})` }}
            ></div>
            <div className="goal-flag">
              <div className="goal-flagText"></div>
              <div className="goal-post"></div>
            </div>
          </div>
          <div className="goal">
            <div
              className="goal-cloud"
              style={{ backgroundImage: `url(${Cloud4})` }}
            ></div>
            <div
              className="goal-chest"
              style={{ backgroundImage: `url(${ChestUnlocked})` }}
            ></div>
            <div className="goal-flag">
              <div className="goal-flagText"></div>
              <div className="goal-post"></div>
            </div>
          </div>
          <div className="goal">
            <div
              className="goal-cloud"
              style={{ backgroundImage: `url(${Cloud5})` }}
            ></div>
            <div
              className="goal-chest"
              style={{ backgroundImage: `url(${ChestLocked})` }}
            ></div>
            <div className="goal-flag">
              <div className="goal-flagText"></div>
              <div className="goal-post"></div>
            </div>
          </div>
          <div className="goal">
            <div
              className="goal-cloud"
              style={{ backgroundImage: `url(${Cloud6})` }}
            ></div>
            <div
              className="goal-chest"
              style={{ backgroundImage: `url(${ChestLocked})` }}
            ></div>
            <div className="goal-flag">
              <div className="goal-flagText"></div>
              <div className="goal-post"></div>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    </Cell>
  )
}
