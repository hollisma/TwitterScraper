import requests
from bs4 import BeautifulSoup
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/', methods=['POST'])
def getHeadlines():
    headlinez = []
    linkz = []
    page = requests.get('http://news.google.com')
    soup = BeautifulSoup(page.content, 'html.parser')
    for headline in soup.select('h3 a'):
        headlinez.append(headline.get_text())
        linkz.append('news.google.com' +
                     headline.get_attribute_list('href')[0][1:])
    return render_template('News.js', headlines=headlinez, links=linkz)
