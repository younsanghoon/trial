$(document).ready(function() {
    const questions = [
        // 성격 특성 (Big Five) - 긍정적 질문 (매우 아니다:1 ~ 매우 그렇다:5)
        { question: "나는 새로운 사람을 만나는 것을 즐긴다.", type: "positive" },
        { question: "나는 다른 사람들에게 동정심을 느낀다.", type: "positive" },
        { question: "나는 항상 준비가 되어 있다.", type: "positive" },
        { question: "나는 생생한 상상력을 가지고 있다.", type: "positive" },
        { question: "나는 다른 사람을 신뢰한다.", type: "positive" },
        { question: "나는 파티의 중심 인물이다.", type: "positive" },
        { question: "나는 조직적이다.", type: "positive" },
        { question: "나는 창의적이다.", type: "positive" },
        { question: "나는 도움이 된다.", type: "positive" },
        { question: "나는 신뢰할 수 있다.", type: "positive" },
        { question: "나는 호기심이 많다.", type: "positive" },
        { question: "나는 친절하다.", type: "positive" },
        { question: "나는 새로운 것을 시도하는 것을 즐긴다.", type: "positive" },

        // 성격 특성 (Big Five) - 부정적 질문 (매우 아니다:5 ~ 매우 그렇다:1)
        { question: "나는 사회적 상황에서 종종 긴장감을 느낀다.", type: "negative" },
        { question: "나는 혼자 있는 것을 선호한다.", type: "negative" },
        { question: "나는 쉽게 화가 난다.", type: "negative" },
        { question: "나는 많이 걱정한다.", type: "negative" },
        { question: "나는 조용하다.", type: "negative" },
        { question: "나는 기분 변화가 심하다.", type: "negative" },

        // 정서 지능 - 긍정적 질문
        { question: "나는 감정을 경험할 때 그것을 인식한다.", type: "positive" },
        { question: "나는 다른 사람이 느끼는 것을 쉽게 이해할 수 있다.", type: "positive" },
        { question: "나는 감정을 잘 관리할 수 있다.", type: "positive" },
        { question: "나는 목표를 달성하기 위해 스스로 동기를 부여할 수 있다.", type: "positive" },
        { question: "나는 관계를 구축하고 유지하는 데 능숙하다.", type: "positive" },
        { question: "나는 스트레스를 느낄 때 그것을 인식한다.", type: "positive" },
        { question: "나는 누군가가 화가 났는지 감지할 수 있다.", type: "positive" },
        { question: "나는 화가 났을 때 스스로를 진정시킬 수 있다.", type: "positive" },
        { question: "나는 스스로 목표를 설정한다.", type: "positive" },
        { question: "나는 잘 듣는다.", type: "positive" },
        { question: "나는 나의 강점과 약점을 이해한다.", type: "positive" },
        { question: "나는 사회적 신호를 읽을 수 있다.", type: "positive" },
        { question: "나는 충동을 조절할 수 있다.", type: "positive" },
        { question: "나는 성공을 위해 노력한다.", type: "positive" },
        { question: "나는 갈등을 해결하는 데 능숙하다.", type: "positive" },
        { question: "나는 언제 휴식을 취해야 하는지 안다.", type: "positive" },
        { question: "나는 다른 사람의 입장에서 생각할 수 있다.", type: "positive" },
        { question: "나는 분노를 관리할 수 있다.", type: "positive" },
        { question: "나는 끈기 있다.", type: "positive" },
        { question: "나는 네트워킹에 능숙하다.", type: "positive" },

        // 정신 건강 - 긍정적 질문
        { question: "나는 내 삶에 만족한다.", type: "positive" },
        { question: "나는 미래에 대해 희망적이다.", type: "positive" },
        { question: "나는 일상 활동을 즐긴다.", type: "positive" },
        { question: "나는 좋은 일이 일어날 것이라고 믿는다.", type: "positive" },
        { question: "나는 미래에 대해 낙관적이다.", type: "positive" },
        { question: "나는 내 삶에 행복하다.", type: "positive" },
        { question: "나는 불확실한 상황에서도 최선을 기대한다.", type: "positive" },

        // 정신 건강 - 부정적 질문
        { question: "나는 종종 슬프거나 공허함을 느낀다.", type: "negative" },
        { question: "나는 다양한 일에 대해 지나치게 걱정한다.", type: "negative" },
        { question: "나는 스트레스에 압도당한다.", type: "negative" },
        { question: "나는 잠을 잘 못 잔다.", type: "negative" },
        { question: "나는 공황 발작을 경험한다.", type: "negative" },
        { question: "나는 긴장되거나 초조함을 느낀다.", type: "negative" },
        { question: "나는 이전에 즐기던 것에 흥미를 잃었다.", type: "negative" },
        { question: "나는 사회적 상황을 피한다.", type: "negative" },
        { question: "나는 집중하기 어렵다.", type: "negative" },
        { question: "나는 무가치함을 느낀다.", type: "negative" },
        { question: "나는 비합리적인 두려움을 가지고 있다.", type: "negative" },
        { question: "나는 지쳤다.", type: "negative" },

        // 자존감 - 긍정적 질문
        { question: "나는 나의 능력에 자신감을 느낀다.", type: "positive" },
        { question: "나는 사랑과 존경을 받을 만한 가치가 있다고 믿는다.", type: "positive" },
        { question: "나는 나 자신을 있는 그대로 받아들인다.", type: "positive" },
        { question: "나는 나의 성취를 자랑스럽게 여긴다.", type: "positive" },
        { question: "나는 나 자신에 대해 좋게 느낀다.", type: "positive" },
        { question: "나는 나의 외모에 만족한다.", type: "positive" },
        { question: "나는 나의 결정에 자신감을 느낀다.", type: "positive" },
        { question: "나는 나의 목표를 달성할 수 있다고 믿는다.", type: "positive" },
        { question: "나는 내 삶에 만족한다.", type: "positive" },
        { question: "나는 내가 가진 것에 감사한다.", type: "positive" },
        { question: "나는 나의 미래에 대해 낙관적이다.", type: "positive" },
        { question: "나는 회복력이 있다.", type: "positive" },
        { question: "나는 유능하다.", type: "positive" },
        { question: "나는 가치 있다.", type: "positive" },
        { question: "나는 사랑받는다.", type: "positive" },
        { question: "나는 존경받는다.", type: "positive" },
        { question: "나는 소중하다.", type: "positive" },
        { question: "나는 중요하다.", type: "positive" },
        { question: "나는 독특하다.", type: "positive" },
        { question: "나는 특별하다.", type: "positive" },

        // 낙관주의 - 긍정적 질문
        { question: "나는 미래에 좋은 일이 일어날 것이라고 기대한다.", type: "positive" },
        { question: "나는 도전이 성장의 기회라고 믿는다.", type: "positive" },
        { question: "나는 나의 미래에 대해 희망적이다.", type: "positive" },
        { question: "나는 삶의 긍정적인 측면에 집중한다.", type: "positive" },
        { question: "나는 장애물을 극복할 수 있다고 믿는다.", type: "positive" },
        { question: "나는 유리잔이 반쯤 차 있다고 본다.", type: "positive" },
        { question: "나는 일이 잘 될 것이라고 믿는다.", type: "positive" },
        { question: "나는 어떤 일이든 처리할 수 있다고 자신한다.", type: "positive" },
        { question: "나는 어려운 상황에서 긍정적인 면을 찾는다.", type: "positive" },
        { question: "나는 내가 변화를 만들 수 있다고 믿는다.", type: "positive" },
        { question: "나는 미래에 대해 흥분된다.", type: "positive" },
        { question: "나는 나의 꿈을 이룰 수 있다고 믿는다.", type: "positive" },
        { question: "나는 내 삶의 좋은 것들에 감사한다.", type: "positive" },
        { question: "나는 실수에서 배울 수 있다고 믿는다.", type: "positive" },
        { question: "나는 나의 관계에 대해 낙관적이다.", type: "positive" },
        { question: "나는 문제에 대한 해결책을 찾을 수 있다고 믿는다.", type: "positive" },
        { question: "나는 나 자신을 개선할 수 있다고 희망한다.", type: "positive" },
        { question: "나는 다른 사람에게 긍정적인 영향을 미칠 수 있다고 믿는다.", type: "positive" },
        { question: "나는 변화를 잘 처리할 수 있다고 자신한다.", type: "positive" },
        { question: "나는 내가 원하는 삶을 만들 수 있다고 믿는다.", type: "positive" }
    ];

    const options = [
        { text: "매우 아니다", value: 1 },
        { text: "아니다", value: 2 },
        { text: "모르겠다", value: 3 },
        { text: "그렇다", value: 4 },
        { text: "매우 그렇다", value: 5 }
    ];

    let currentQuestionIndex = 0;
    let userAnswers = new Array(questions.length).fill(null); // Stores selected option value for each question

    function updateProgressBar() {
        const progress = ((currentQuestionIndex) / questions.length) * 100;
        $('#progress-bar-fill').css('width', `${progress}%`);
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            $('#question-number').text(`질문 ${currentQuestionIndex + 1} / ${questions.length}`);
            $('#question-text').text(q.question);
            $('#options-container').empty();

            options.forEach(option => {
                const button = $('<button>')
                    .addClass('option-button')
                    .text(option.text)
                    .data('value', option.value)
                    .on('click', function() {
                        $('.option-button').removeClass('selected');
                        $(this).addClass('selected');
                        userAnswers[currentQuestionIndex] = {
                            value: option.value,
                            type: q.type // Store question type for scoring
                        };
                        // Auto-advance to next question after a short delay
                        setTimeout(() => {
                            if (currentQuestionIndex === questions.length - 1) {
                                calculateResult();
                            } else {
                                currentQuestionIndex++;
                                displayQuestion();
                            }
                        }, 300); // 0.3 second delay
                    });
                $('#options-container').append(button);
            });

            // Restore previously selected answer if exists
            if (userAnswers[currentQuestionIndex] !== null) {
                $(`.option-button[data-value="${userAnswers[currentQuestionIndex].value}"]`).addClass('selected');
            }

            $('#quiz-container').show();
            $('#result-container').hide();
            $('#prev-question').toggle(currentQuestionIndex > 0); // Show/hide prev button
            $('#next-question').hide(); // Hide next button for auto-advance
            updateProgressBar();

        } else {
            calculateResult();
        }
    }

    function calculateResult() {
        let totalScore = 0;
        userAnswers.forEach((answer, index) => {
            if (answer !== null) {
                if (answer.type === 'positive') {
                    totalScore += answer.value;
                } else { // negative type, reverse score
                    totalScore += (6 - answer.value); // 1->5, 2->4, 3->3, 4->2, 5->1
                }
            }
        });

        let resultText = '';
        // For 100 questions, min score = 100 (all 1s), max score = 500 (all 5s)
        // Average score for neutral answers (all 3s) = 300
        // Adjust ranges based on the actual number of questions (currently 100)
        const maxPossibleScore = questions.length * 5;
        const minPossibleScore = questions.length * 1;
        const scoreRange = maxPossibleScore - minPossibleScore;

        // Example ranges (adjust as needed for your specific test)
        if (totalScore >= (minPossibleScore + scoreRange * 0.8)) { // Top 20%
            resultText = `<h3>'활기찬 탐험가' 유형</h3>
                          <p>당신은 에너지가 넘치고 새로운 도전을 두려워하지 않는 '활기찬 탐험가'입니다. 사람들과 어울리며 활발하게 소통하는 것을 즐기고, 모임의 분위기를 주도하는 경우가 많습니다. 호기심이 많아 새로운 경험과 지식을 끊임없이 탐구하며, 변화를 두려워하지 않고 적극적으로 받아들입니다. 문제 해결에 있어서도 빠르고 직관적인 판단력을 보여주며, 목표를 향해 거침없이 나아갑니다. 당신의 열정과 추진력은 주변 사람들에게 긍정적인 영향을 줍니다. 때로는 너무 성급하게 결정을 내리거나 타인의 의견을 간과할 수 있으니, 한 번 더 신중하게 생각하고 주변의 조언을 경청하는 자세가 필요할 수 있습니다.</p>
                          <p>총점: ${totalScore}점</p>`;
        } else if (totalScore >= (minPossibleScore + scoreRange * 0.4)) { // Middle 40%
            resultText = `<h3>'균형 잡힌 조화주의자' 유형</h3>
                          <p>당신은 내향적인 면과 외향적인 면을 모두 가지고 있는 '균형 잡힌 조화주의자'입니다. 사람들과의 교류를 즐기면서도 혼자만의 시간을 소중히 여깁니다. 다양한 상황에 유연하게 대처하며, 어떤 환경에서도 잘 적응하는 능력이 뛰어납니다. 갈등 상황에서는 중재자 역할을 자처하며, 모두의 의견을 존중하고 조화를 이루려 노력합니다. 새로운 경험에 대한 호기심도 많고, 안정적인 일상도 중요하게 생각합니다. 당신의 유연함과 포용력은 주변 사람들에게 편안함을 제공합니다. 때로는 너무 많은 것을 조율하려다 자신의 의견을 잃을 수 있으니, 때로는 단호하게 자신의 주장을 펼치는 것도 중요합니다.</p>
                          <p>총점: ${totalScore}점</p>`;
        } else {
            resultText = `<h3>'고요한 사색가' 유형</h3>
                          <p>당신은 내면의 세계가 풍부하고 깊은 사색을 즐기는 '고요한 사색가'입니다. 혼자만의 시간을 통해 에너지를 충전하며, 복잡한 문제에 대해서도 신중하고 깊이 있게 접근하는 경향이 있습니다. 타인의 감정을 잘 이해하고 공감하지만, 겉으로 드러내기보다는 조용히 지지하는 편입니다. 새로운 환경보다는 익숙하고 안정적인 것을 선호하며, 소수의 깊은 관계를 중요하게 생각합니다. 당신의 차분함과 통찰력은 주변 사람들에게 안정감을 줍니다. 때로는 자신의 생각을 표현하는 데 어려움을 느낄 수 있으니, 조금 더 적극적으로 소통하려는 노력이 필요할 수 있습니다.</p>
                          <p>총점: ${totalScore}점</p>`;
        }

        $('#result-text').html(resultText);
        $('#quiz-container').hide();
        $('#result-container').show();
        $('#progress-bar').hide(); // Hide progress bar on result screen
    }

    // Next button is now hidden for auto-advance.
    $('#next-question').hide(); 

    $('#prev-question').on('click', function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
        }
    });

    $('#restart-quiz').on('click', function() {
        currentQuestionIndex = 0;
        userAnswers.fill(null);
        $('#progress-bar').show(); // Show progress bar on restart
        displayQuestion();
    });

    $('#share-result').on('click', function() {
        const resultContent = $('#result-text').text(); // Get the text content
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(resultContent).then(() => {
                alert('결과가 클립보드에 복사되었습니다!');
            }).catch(err => {
                console.error('클립보드 복사 실패:', err);
                alert('결과 복사에 실패했습니다. 수동으로 복사해주세요.');
            });
        } else {
            // Fallback for older browsers (less common now)
            const textarea = $('<textarea>').val(resultContent).appendTo('body').select();
            document.execCommand('copy');
            textarea.remove();
            alert('결과가 클립보드에 복사되었습니다!');
        }
    });

    // Initial display
    displayQuestion();
});